import fetch from 'node-fetch';
import '@whiskeysockets/baileys';

let cooldown = new Map();

let handler = async (m, { conn, args }) => {
  const now = Date.now();
  const lastUsed = cooldown.get(m.sender);

  if (m.sender !== "923255156992@s.whatsapp.net" && lastUsed && now - lastUsed < 100000) {
    const remaining = 100000 - (now - lastUsed);
    const minutes = Math.floor(remaining / 60000);
    const seconds = ((remaining % 60000) / 1000).toFixed(0);
    return conn.reply(m.chat, `Please wait ${minutes} minute(s) and ${seconds} second(s) before requesting again.`, m);
  }

  if (!args[0]) {
    return conn.reply(m.chat, "Please provide a phone number.\n*Example:* *.getpair 965456....*", m);
  }

  const q = encodeURIComponent(args[0]);
  const apiUrl = `https://kashmiri-md-774f26e4566a.herokuapp.com/code?number=${q}`;

  await m.reply("*Wait getting your pair code*");

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Network response was not ok: ${res.statusText} (Status Code: ${res.status}). Response: ${errorText}`);
    }

    const json = await res.json();

    if (json.code) {
      const code = json.code;
      const caption = `
*⛲Pairing Code⛲*

💬 A verification code has been sent to your phone number. Please check your phone and copy this code to pair it and get your KASHMIRI bot session ID.

*🔢 Code:* \`${code}\`
*_Copy it from below_*`;

      const imageMessage = {
        image: { url: 'https://ibb.co/7xLTpy5Z.jpg' },
        caption
      };

      await conn.sendMessage(m.chat, imageMessage);
      await conn.reply(m.chat, '' + code, m);
      cooldown.set(m.sender, now);

    } else if (json.error) {
      conn.reply(m.chat, "Error: " + json.error, m);
    } else {
      conn.reply(m.chat, "Unexpected response structure: " + JSON.stringify(json), m);
    }
  } catch (err) {
    console.error("Error:", err);
    conn.reply(m.chat, "Error: " + err.message, m);
  }
};

handler.help = ['getpair', 'pair'];
handler.tags = ['tools'];
handler.command = ['paircode', 'getpair', 'pair'];
handler.owner = false;
handler.private = true;

export default handler;