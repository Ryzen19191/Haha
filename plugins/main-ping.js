import performanceNow from 'performance-now';
import { exec } from 'child_process';

let handler = async (m, { conn }) => {
  let start = performanceNow();
  let latency = performanceNow() - start;
  let emojis = ['🟣', '🟤', '🔵', '⚫', '⚪', '🟢', '🟠', '🟡'];
  let emoji = emojis[Math.floor(Math.random() * emojis.length)];

  exec("neofetch --stdout", async (err, stdout, stderr) => {
    try {
      let sentMsg = await m.reply(`${emoji} *Ping* : ${latency.toFixed(4)} *Milliseconds (ms)*`);
      await m.react(emoji);
      if (sentMsg && sentMsg.key) {
        await conn.sendMessage(sentMsg.key.remoteJid, {
          react: {
            text: emoji,
            key: sentMsg.key
          }
        });
      }
    } catch (error) {
      console.error("Failed to react:", error);
    }
  });
};

handler.help = ['ping'];
handler.tags = ['main'];
handler.command = ['ping', 'speed'];

export default handler;