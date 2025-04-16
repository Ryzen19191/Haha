import _0x3eeece from 'fs';
let handler = async (_0x5ccbd2, {
  conn: _0x3f7f2b,
  text: _0x4d6b99,
  usedPrefix: _0x33d052,
  command: _0xfe0e5a
}) => {
  const _0x1750d5 = {
    url: 'https://github.com/Ryzen19191/Haha/raw/main/lib/source/mp3/Audio5.mp3'
  };
  let _0x2bc7bf = {
    'audio': _0x1750d5,
    'mimetype': 'audio/mp4',
    'ptt': true,
    'waveform': [100, 0, 100, 0, 100, 0, 100],
    'fileName': 'Prince',
    'contextInfo': {
      'mentionedJid': [_0x5ccbd2.sender],
      'externalAdReply': {
        'title': "🎗️ᴋᴀsʜᴍɪʀɪ ᴍᴅ ɪs ᴀʟɪᴠᴇ ʀᴇᴄɪᴛᴇ ᴅᴀʀᴏᴏᴅ sʜᴀʀᴇᴇғ🎗️",
        'body': "PRINCE BOT",
        'thumbnail': _0x3eeece.readFileSync("./lib/source/drd.jpg"),
        'sourceUrl': 'https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b',
        'mediaType': 0x1,
        'renderLargerThumbnail': true
      }
    }
  };
  await _0x3f7f2b.sendMessage(_0x5ccbd2.chat, _0x2bc7bf);
};
handler.help = ['alive'];
handler.tags = ["main"];
handler.command = /^(alive)$/i;
export default handler;