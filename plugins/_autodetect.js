let WAMessageStubType = (await import("@whiskeysockets/baileys"))['default'];
import _0x25addf from 'node-fetch';
import 'fs';
import 'path';
let handler = _0xb707 => _0xb707;
handler.before = async function (_0x3464ff, {
  conn: _0x28d7f6,
  participants: _0x2b0854,
  groupMetadata: _0x16653e
}) {
  if (!_0x3464ff.messageStubType || !_0x3464ff.isGroup) {
    return;
  }
  const _0x153f3d = {
    participants: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    fromMe: false,
    'id': "Halo"
  };
  global.fkontak = {
    'key': _0x153f3d,
    'message': {
      'contactMessage': {
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x3464ff.sender.split('@')[0] + ':' + _0x3464ff.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    'participant': "0@s.whatsapp.net"
  };
  let _0x35a3d0 = await _0x28d7f6.profilePictureUrl(_0x28d7f6.user.jid)["catch"](_0xa42a8a => imagen1);
  const _0x18a79e = await (await _0x25addf(_0x35a3d0)).buffer();
  const _0x41023b = global.db.data.chats[_0x3464ff.chat];
  if (_0x41023b.detect && _0x3464ff.messageStubType == 25) {
    await this.sendMessage(_0x3464ff.chat, {
      'text': "🚩 *Now " + (_0x3464ff.messageStubParameters[0] == 'on' ? "only admins" : "everyone") + " can edit the group information*",
      'mentions': [_0x3464ff.sender]
    }, {
      'quoted': fkontak,
      'ephemeralExpiration': 144000,
      'disappearingMessagesInChat': 144000
    });
  } else if (_0x41023b.detect && _0x3464ff.messageStubType == 26) {
    await this.sendMessage(_0x3464ff.chat, {
      'text': "🚩 *The group has been " + (_0x3464ff.messageStubParameters[0] == 'on' ? 'closed' : "opened") + "*\n\n" + (_0x3464ff.messageStubParameters[0] == 'on' ? "only admins" : "everyone") + " can send messages",
      'mentions': [_0x3464ff.sender]
    }, {
      'quoted': fkontak,
      'ephemeralExpiration': 144000,
      'disappearingMessagesInChat': 144000
    });
  } else if (_0x41023b.detect && _0x3464ff.messageStubType == 29) {
    let _0x484f90 = "🚩 *New admin*\n\n";
    _0x484f90 += "Name: @" + _0x3464ff.messageStubParameters[0].split`@`[0] + "\n";
    _0x484f90 += "Granted admin by: @" + _0x3464ff.sender.split`@`[0];
    const _0x5567c8 = {
      showAdAttribution: true,
      containsAutoReply: true,
      renderLargerThumbnail: true,
      title: global.packname,
      body: "Prince",
      containsAutoReply: true,
      mediaType: 0x1,
      thumbnail: _0x18a79e,
      mediaUrl: "https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b",
      sourceUrl: 'https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b'
    };
    await _0x28d7f6.sendMessage(_0x3464ff.chat, {
      'text': _0x484f90,
      'mentions': [..._0x484f90.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x106b82 => _0x106b82[1] + "@s.whatsapp.net"),
      'contextInfo': {
        'mentionedJid': [..._0x484f90.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x30a476 => _0x30a476[1] + "@s.whatsapp.net"),
        'externalAdReply': _0x5567c8
      }
    });
  } else if (_0x41023b.detect && _0x3464ff.messageStubType == 30) {
    let _0x26a23f = "🚩 *One less admin*\n\n";
    _0x26a23f += "Name: @" + _0x3464ff.messageStubParameters[0].split`@`[0] + "\n";
    _0x26a23f += "Admin rights revoked by: @" + _0x3464ff.sender.split`@`[0];
    const _0x570462 = {
      showAdAttribution: true,
      'containsAutoReply': true,
      renderLargerThumbnail: true,
      'title': global.packname,
      body: dev,
      containsAutoReply: true,
      'mediaType': 0x1,
      thumbnail: _0x18a79e,
      mediaUrl: 'https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b',
      sourceUrl: "https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b"
    };
    await _0x28d7f6.sendMessage(_0x3464ff.chat, {
      'text': _0x26a23f,
      'mentions': [..._0x26a23f.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x1c19f1 => _0x1c19f1[1] + "@s.whatsapp.net"),
      'contextInfo': {
        'mentionedJid': [..._0x26a23f.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x5e6e1f => _0x5e6e1f[1] + "@s.whatsapp.net"),
        'externalAdReply': _0x570462
      }
    });
  } else {
    if (_0x3464ff.messageStubType == 2) {
      return;
    }
    const _0x788801 = {
      'messageStubType': _0x3464ff.messageStubType,
      messageStubParameters: _0x3464ff.messageStubParameters,
      type: WAMessageStubType[_0x3464ff.messageStubType]
    };
    console.log(_0x788801);
  }
};
export default handler;