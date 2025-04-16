import { promises as fs } from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';
import crypto from 'crypto';
import moment from 'moment-timezone';
import { xpRange } from '../lib/levelling.js';

const tags = {
  quran: "🕋 QURAN CMDS",
  study: "📚 STUDY CMDS",
  downloader: "📥 DOWNLOADERS CMDS",
  main: "ℹ️ INFOBOT CMDS",
  owner: "👑 OWNER CMDS",
  group: "⚙️ GROUP CMDS",
  bebot: "💻 JADIBOT CMDS",
  tools: "🔧 TOOLS CMDS",
  game: "🎮 GAMES CMDS",
  rg: "🟢 REGISTRY CMDS",
  config: "🕹 BOT SETTINGS",
  search: "🔍 SEARCH CMDS",
  sticker: "🧧 STICKER CMDS",
  econ: "🛠 RPG CMDS",
  reaction: "🎈 REACTIONS CMDS",
  maker: "🎀 LOGOS CMDS",
  fun: "🪄FUN CMDS",
  audio: "🎶 AUDIO CMDS",
};

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
  const greeting = ucapan();
  const menuTemplates = {
    before: (
      `「 *%botname* 」\n\n` +
      `*Hey!* 👋🏻 *%name*\n\n` +
      `• DATE:  \`\`\`%fecha\`\`\`\n` +
      `• TIME:  \`\`\`%hora (🇵🇰)\`\`\`\n` +
      `• UPTIME:  \`\`\`%muptime\`\`\`\n` +
      `• ${greeting}\n\n` +
      `┌─❖ *💎 KASHMIRI MD COMMANDS* ❖─┐\n` +
      `│\n` +
      `├ ✧ 🕋 *${usedPrefix}Quranmenu*\n` +
      `├ ✧ 📚 *${usedPrefix}Studymenu*\n` +
      `├ ✧ 👑 *${usedPrefix}Ownermenu*\n` +
      `├ ✧ 💌 *${usedPrefix}Botmenu*\n` +
      `├ ✧ 🧬 *${usedPrefix}Groupmenu*\n` +
      `├ ✧ 📥 *${usedPrefix}DLmenu*\n` +
      `├ ✧ 🧰 *${usedPrefix}Toolsmenu*\n` +
      `├ ✧ 🎨 *${usedPrefix}Stickermenu*\n` +
      `├ ✧ 🎉 *${usedPrefix}Funmenu*\n` +
      `├ ✧ 🎮 *${usedPrefix}Gamemenu*\n` +
      `├ ✧ 🎩 *${usedPrefix}Logomenu*\n` +
      `├ ✧ 📃 *${usedPrefix}list*\n` +
      `├ ✧ 📜 *${usedPrefix}Menu2*\n` +
      `│\n` +
      `└───────── ★ ★ ★ ─────────┘\n%readmore`
    ).trimStart(),
    header: "*`◉ %category`*",
    body: " ║\n╠ ○ *%cmd* %islimit %isPremium",
    footer: "╚• \n\n",
    after: "*ᴋᴀsʜᴍɪʀɪ ᴍᴅ*\n",
  };

  try {
    m.react('⏳');

    const pkg = JSON.parse(await fs.readFile(join(__dirname, '../package.json')).catch(() => '{}')) || {};
    const user = global.db.data.users[m.sender];
    const { min, xp, max } = xpRange(user.level, global.multiplier);
    const name = await conn.getName(m.sender);
    const currentDate = moment().tz("Asia/Karachi");
    const fecha = currentDate.format("DD/MM/YYYY");
    const hora = currentDate.format("LT");

    const uptime = clockString(process.uptime() * 1000);
    let muptime;
    if (process.send) {
      process.send("uptime");
      muptime = (await new Promise(resolve => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
    }
    const formattedMuptime = clockString(muptime);
    const totalUsers = Object.keys(global.db.data.users).length;
    const registeredUsers = Object.values(global.db.data.users).filter(u => u.registered).length;
    const botInfo = conn.user.jid === global.conn.user.jid
      ? `*• Bot Ofc:* wa.me/${global.conn.user.jid.split('@')[0]}`
      : `• Soy un sub bot del:* wa.me/${global.conn.user.jid.split('@')[0]}`;

    const plugins = Object.values(global.plugins).filter(p => !p.disabled).map(plugin => ({
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: "customPrefix" in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
    }));

    for (const plugin of plugins) {
      if (plugin.tags) {
        for (const tag of plugin.tags) {
          if (!(tag in tags)) tags[tag] = tag;
        }
      }
    }

    const menu = [
      menuTemplates.before,
      ...Object.keys(tags).map(category => {
        const commands = plugins
          .filter(p => p.tags && p.tags.includes(category) && p.help)
          .map(p => p.help.map(cmd =>
            menuTemplates.body
              .replace(/%cmd/g, p.prefix ? cmd : `%p${cmd}`)
              .replace(/%islimit/g, p.limit ? "(ⓓ)" : '')
              .replace(/%isPremium/g, p.premium ? "(Ⓟ)" : '')
          ).join("\n"));
        return menuTemplates.header.replace(/%category/g, tags[category]) + "\n" + commands.join("\n") + "\n" + menuTemplates.footer;
      }),
      menuTemplates.after,
    ].join("\n");

    const finalMenu = typeof conn.menu === "string" ? conn.menu : menu;

    await conn.sendMessage(m.chat, {
      text: finalMenu.replace(/%p/g, usedPrefix)
        .replace(/%name/g, name)
        .replace(/%uptime/g, uptime)
        .replace(/%muptime/g, formattedMuptime)
        .replace(/%fecha/g, fecha)
        .replace(/%hora/g, hora)
        .replace(/%botname/g, pkg.name || "Bot")
        .replace(/%readmore/g, String.fromCharCode(8206).repeat(4001)),
      mentions: [m.sender]
    }, { quoted: m });
  } catch (err) {
    console.error("Menu error:", err);
  }
};

function clockString(ms) {
  if (typeof ms !== "number") return "--:--:--";
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, "0")).join(":");
}

function ucapan() {
  const hour = moment().tz("Asia/Karachi").hour();
  if (hour >= 4 && hour < 10) return "Good Morning";
  if (hour >= 10 && hour < 15) return "Good Afternoon";
  if (hour >= 15 && hour < 18) return "Good Evening";
  return "Good Night";
}

export default handler;