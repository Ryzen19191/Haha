import _0x25b805 from 'axios';
import _0x2e4adf from 'moment-timezone';
let handler = async function (_0x2a1539, {
  conn: _0x109dfd
}) {
  let _0x5a2836 = clockString(process.uptime() * 1000);
  let _0x31d3b3 = _0x109dfd.getName(_0x2a1539.sender);
  let _0x5025f3 = ucapan();
  try {
    await _0x2a1539.react('⏳');
    const [, _0x43a439, _0x340890] = "https://github.com/KASHMIRICRASHER/KASHMIRI-MD".match(/github\.com\/([^/]+)\/([^/]+)/);
    const _0x47590e = await _0x25b805.get("https://api.github.com/repos/" + _0x43a439 + '/' + _0x340890);
    if (_0x47590e.status === 200) {
      const _0x584837 = _0x47590e.data;
      const _0x381edf = _0x2e4adf(_0x584837.updated_at).format("DD MMM YYYY - h:mm A");
      let _0xc09e5f = ("\n╭───「 𝐊𝐀𝐒𝐇𝐌𝐈𝐑𝐈  𝘽𝙊𝙏 」──◆\n│\n│✨ *Hey! " + _0x31d3b3 + "* \n│🌟 " + _0x5025f3 + " \n│\n│📌 *𝗥𝗘𝗣𝗢 𝗜𝗡𝗙𝗢*\n│🔹 𝗡𝗮𝗺𝗲 » *" + _0x584837.name + "*\n│🔗 𝗨𝗥𝗟 » *" + _0x584837.html_url + "*\n│📄 𝗗𝗲𝘀𝗰 » *" + (_0x584837.description || "No description") + "*\n│\n│💖 𝗦𝘁𝗮𝗿𝘀 » *" + _0x584837.stargazers_count + "*\n│🍴 𝗙𝗼𝗿𝗸𝘀 » *" + _0x584837.forks_count + "*\n│👀 𝗪𝗮𝘁𝗰𝗵𝗲𝗿𝘀 » *" + _0x584837.watchers_count + "*\n│📡 𝗦𝘂𝗯𝘴𝗰𝗿𝗶𝗯𝗲𝗿𝘀 » *" + _0x584837.subscribers_count + "*\n│⚠️ 𝗜𝘀𝘀𝘂𝗲𝘀 » *" + _0x584837.open_issues_count + "*\n│\n│⏳ 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 » *" + _0x381edf + "*\n│⌛ 𝗕𝗼𝘁 𝗨𝗽𝘁𝗶𝗺𝗲 » *" + _0x5a2836 + "*\n│👑 𝗗𝗲𝘃 » *Kashmiri* [Contact](https://wa.me/923255156992)\n╰──────────────────────◆\n      ").trim();
      await _0x2a1539.react('✅');
      await _0x109dfd.sendFile(_0x2a1539.chat, "./lib/source/hm.jpg", "Menu.png", _0xc09e5f, _0x2a1539, null, {
        'quoted': _0x2a1539,
        'contextInfo': {
          'mentionedJid': [_0x2a1539.sender],
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363312991035785@newsletter",
            'newsletterName': global.author,
            'serverMessageId': -1
          },
          'forwardingScore': 0x3e7
        }
      });
    }
  } catch (_0x39fbda) {
    console.error(_0x39fbda);
    _0x2a1539.reply("❌ *Error fetching repository information*");
  }
};
handler.help = ["script"];
handler.tags = ["main"];
handler.command = ['sc', "repo", "script", "git", "github"];
export default handler;
function clockString(_0x2e2366) {
  let _0x213bd3 = Math.floor(_0x2e2366 / 86400000);
  let _0x3a761b = Math.floor(_0x2e2366 / 3600000) % 24;
  let _0x5848bf = Math.floor(_0x2e2366 / 60000) % 60;
  let _0x5d25d9 = Math.floor(_0x2e2366 / 1000) % 60;
  return _0x213bd3 + "d " + _0x3a761b + "h " + _0x5848bf + "m " + _0x5d25d9 + 's';
}
function ucapan() {
  const _0x5f115c = _0x2e4adf.tz('Asia/Karachi').format('HH');
  if (_0x5f115c < 4) {
    return "🌙 𝙂𝙊𝙊𝘿 𝙉𝙄𝙂𝙃𝙏";
  }
  if (_0x5f115c < 10) {
    return "🌅 𝙂𝙊𝙊𝘿 𝙈𝙊𝙍𝙉𝙄𝙉𝙂";
  }
  if (_0x5f115c < 15) {
    return "☀️ 𝙂𝙊𝙊𝘿 𝙉𝙊𝙊𝙉";
  }
  if (_0x5f115c < 18) {
    return "🌆 𝙂𝙊𝙊𝘿 𝘼𝙁𝙏𝙀𝙍𝙉𝙊𝙊𝙉";
  }
  return "🌌 𝙂𝙊𝙊𝘿 𝙀𝙑𝙀𝙉𝙄𝙉𝙂";
}