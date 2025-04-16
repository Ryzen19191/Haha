const {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  MessageRetryMap,
  makeCacheableSignalKeyStore,
  jidNormalizedUser,
  PHONENUMBER_MCC
} = await import("@whiskeysockets/baileys");
import 'moment-timezone';
import _0x580db4 from 'awesome-phonenumber';
import _0x24ec58 from 'node-cache';
import 'readline';
import 'qrcode';
import { fileURLToPath } from 'url';
import _0x5ec7fa from 'crypto';
import _0x2048cf from 'fs';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import 'path';
import _0x13d54f from 'pino';
import 'ws';
import '@hapi/boom';
import { makeWASocket } from '../lib/simple.js';
const _0x2613a9 = {
  data: {}
};
if (!global.db) {
  global.db = _0x2613a9;
}
const _0x5ca07d = {
  settings: {}
};
if (!global.db.data) {
  global.db.data = _0x5ca07d;
}
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, '../package.json');
const {
  name,
  author,
  version: versionSB,
  description
} = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
let handler = async (_0x5197f5, {
  conn: _0x400eaa,
  args: _0x390a59,
  usedPrefix: _0x22546f,
  command: _0x52b261,
  isOwner: _0x5a0bdd,
  text: _0x133162
}) => {
  let _0x3503fb = _0x390a59[0] && _0x390a59[0] == 'plz' ? _0x400eaa : await global.conn;
  _0x133162 = (_0x133162 ? _0x133162 : _0x390a59[0] ? _0x390a59[0] : '').toLowerCase();
  let _0x4964e3 = "*You can use this command only in the main bot, you can go to it via* \n *Click on the link*\n\nwa.me/923255156992?text=jadibot";
  if (!(_0x390a59[0] && _0x390a59[0] == 'plz' || (await global.conn).user.jid == _0x400eaa.user.jid) && !_0x5197f5.fromMe) {
    const _0x540084 = {
      text: _0x4964e3
    };
    return _0x400eaa.sendMessage(_0x5197f5.chat, _0x540084, {
      'quoted': _0x5197f5
    });
  }
  let _0x495fd6 = _0x5ec7fa.randomBytes(10).toString('hex').slice(0, 8);
  async function _0x597833() {
    if (!_0x2048cf.existsSync("./bebots/" + _0x495fd6)) {
      const _0x1de28e = {
        recursive: true
      };
      _0x2048cf.mkdirSync("./bebots/" + _0x495fd6, _0x1de28e);
    }
    if (_0x390a59[0]) {
      _0x2048cf.writeFileSync("./bebots/" + _0x495fd6 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x390a59[0], 'base64').toString("utf-8")), null, "\t"));
    } else {
      '';
    }
    const {
      state: _0xfb27f7,
      saveState: _0x4ef698,
      saveCreds: _0x5993fb
    } = await useMultiFileAuthState("./bebots/" + _0x495fd6);
    const _0xd48edb = _0x16008e => {};
    const _0xe80357 = new _0x24ec58();
    const {
      version: _0x1f569e
    } = await fetchLatestBaileysVersion();
    let _0x160730 = _0x5197f5.sender.split('@')[0];
    const _0x297f97 = _0x133162.includes('qr') || false;
    const _0x2198f4 = process.argv.includes("mobile");
    const _0x14397a = {
      'logger': _0x13d54f({
        'level': "silent"
      }),
      'printQRInTerminal': !!_0x297f97,
      'mobile': _0x2198f4,
      'browser': ["Ubuntu", "Edge", "110.0.1587.56"],
      'auth': {
        'creds': _0xfb27f7.creds,
        'keys': makeCacheableSignalKeyStore(_0xfb27f7.keys, _0x13d54f({
          'level': "fatal"
        }).child({
          'level': "fatal"
        }))
      },
      'markOnlineOnConnect': true,
      'generateHighQualityLinkPreview': true,
      'getMessage': async _0x5b0057 => {
        let _0x3b7965 = jidNormalizedUser(_0x5b0057.remoteJid);
        let _0x322f6b = await store.loadMessage(_0x3b7965, _0x5b0057.id);
        return _0x322f6b?.["message"] || '';
      },
      'msgRetryCounterCache': _0xe80357,
      'msgRetryCounterMap': _0xd48edb,
      'defaultQueryTimeoutMs': undefined,
      'version': _0x1f569e
    };
    let _0x1c41ff = makeWASocket(_0x14397a);
    _0x1c41ff.isInit = false;
    let _0x463bb4 = true;
    let _0x240777 = _0x160730.replace(/[^0-9]/g, '');
    let _0xa47eb9 = '';
    if (!_0x2048cf.existsSync("./bebots/" + _0x495fd6 + "/creds.json")) {
      _0xa47eb9 = "*ᴋᴀsʜᴍɪʀɪ 𝘉𝘖𝘛 𝘊𝘓𝘖𝘕𝘌𝘙*\n\n1-𝘊𝘰𝘱𝘺 𝘵𝘩𝘦 𝘣𝘦𝘭𝘰𝘸 𝘤𝘰𝘥𝘦\n2-𝘠𝘰𝘶 𝘸𝘪𝘭𝘭 𝘳𝘦𝘤𝘦𝘪𝘷𝘦 𝘢 𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘵𝘪𝘰𝘯, 𝘤𝘭𝘪𝘤𝘬 𝘰𝘯 𝘪𝘵, 𝘵𝘩𝘦𝘯 𝘦𝘯𝘵𝘦𝘳 𝘵𝘩𝘦 𝘤𝘰𝘥𝘦 𝘵𝘩𝘦𝘳𝘦\n3- 𝘪𝘵 𝘸𝘪𝘭𝘭 𝘣𝘦𝘤𝘰𝘮𝘦 𝘣𝘰𝘵\nᴋᴀsʜᴍɪʀɪ ᴍᴅ 𝘪𝘴 𝘴𝘵𝘪𝘭𝘭 𝘢 𝘣𝘰𝘵 𝘥𝘰𝘯'𝘵 𝘸𝘰𝘳𝘳𝘺😊";
      let _0x23b423;
      let _0x1df9a1;
      setTimeout(async () => {
        let _0x50d332 = await _0x1c41ff.requestPairingCode(_0x240777);
        _0x50d332 = _0x50d332?.['match'](/.{1,4}/g)?.["join"]('-') || _0x50d332;
        _0x23b423 = await _0x3503fb.sendMessage(_0x5197f5.chat, {
          'text': _0xa47eb9.trim(),
          'mentions': [_0x5197f5.sender]
        }, {
          'quoted': _0x5197f5
        });
        const _0x599123 = {
          text: _0x50d332
        };
        _0x1df9a1 = await _0x3503fb.sendMessage(_0x5197f5.chat, _0x599123, {
          'quoted': _0x5197f5
        });
      }, 2000);
      setTimeout(() => {
        const _0x2dec08 = {
          "delete": _0x23b423.key
        };
        _0x3503fb.sendMessage(_0x5197f5.chat, _0x2dec08);
        const _0x52f3ec = {
          "delete": _0x1df9a1.key
        };
        _0x3503fb.sendMessage(_0x5197f5.chat, _0x52f3ec);
      }, 60000);
    }
    async function _0x55b4e8(_0x5746b1) {
      const {
        connection: _0x48ec95,
        lastDisconnect: _0x42591f,
        isNewLogin: _0x23753a,
        qr: _0x16fb49
      } = _0x5746b1;
      if (_0x23753a) {
        _0x1c41ff.isInit = true;
      }
      global.db.data.settings.lastConnection = _0x48ec95;
      const _0x4b9b7f = _0x42591f?.['error']?.["output"]?.['statusCode'] || _0x42591f?.["error"]?.["output"]?.["payload"]?.["statusCode"];
      if (_0x4b9b7f && _0x4b9b7f !== DisconnectReason.loggedOut && _0x1c41ff?.['ws']["socket"] == null) {
        let _0x3852eb = global.conns.indexOf(_0x1c41ff);
        if (_0x3852eb < 0) {
          console.log(await _0x531103(true)["catch"](console.error));
        }
        delete global.conns[_0x3852eb];
        global.conns.splice(_0x3852eb, 1);
        if (_0x4b9b7f !== DisconnectReason.connectionClosed) {
          const _0xa8c111 = {
            text: "*Connected successfully* ✅\n*Your number has now become a ᴋᴀsʜᴍɪʀɪ bot clone😊*"
          };
          _0x3503fb.sendMessage(_0x5197f5.chat, _0xa8c111, {
            'quoted': _0x5197f5
          });
        } else {
          const _0x39ce11 = {
            text: "*An error occurred while connecting, try trying again 😊*"
          };
          _0x3503fb.sendMessage(_0x5197f5.chat, _0x39ce11, {
            'quoted': _0x5197f5
          });
        }
      }
      if (global.db.data == null) {
        loadDatabase();
      }
      if (!global.db.data.settings) {
        global.db.data.settings = {};
      }
      if (_0x48ec95 == "open") {
        _0x1c41ff.isInit = true;
        global.conns.push(_0x1c41ff);
        global.db;
        global.db.data.settings.lastConnection = "open";
        global.db.data.settings.lastSuccess = Date.now();
        _0x127417();
        const _0x46f162 = {
          text: _0x390a59[0] ? "*✅ Successfully connected!*" : "*✅ Connected with WhatsApp*\n\n♻️ *Commands related to Sub Bot:*\n» *#stop* _(Pause sub bot)_\n\n» *#serbot [long text]* _(Resume bot if paused or stopped working)_\n\n*Thanks for using ❤️" + name + "*\n\n📢 *Get informed about the latest updates on our official channel:*\nhttps://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b"
        };
        await _0x3503fb.sendMessage(_0x5197f5.chat, _0x46f162, {
          'quoted': _0x5197f5
        });
        const _0x43d590 = {
          text: "*If you like this bot give star to my repo*\nhttps://github.com/KASHMIRICRASHER/KASHMIRI-MD\nhttps://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b"
        };
        await _0x3503fb.sendMessage(_0x5197f5.chat, _0x43d590, {
          'quoted': _0x5197f5
        });
        if (_0x390a59[0]) {
          console.log("*Sub Bot user reconnecting: " + _0x580db4('+' + (_0x1c41ff.user?.["jid"]).replace("@s.whatsapp.net", '')).getNumber("international") + " (" + _0x1c41ff.getName(_0x1c41ff.user.jid) + ')*');
        } else {
          console.log("*New user connected as Sub Bot: " + _0x580db4('+' + (_0x1c41ff.user?.["jid"]).replace("@s.whatsapp.net", '')).getNumber("international") + " (" + _0x1c41ff.getName(_0x1c41ff.user.jid) + ')*');
        }
        await sleep(5000);
        if (_0x390a59[0]) {
          return;
        }
        const _0x5ed187 = {
          'text': "*If the sub bot is paused or after the task is finished, send this message to try to reconnect*"
        };
        const _0x3bc1bf = {
          quoted: _0x5197f5
        };
        await _0x3503fb.sendMessage(_0x1c41ff.user.jid, _0x5ed187, _0x3bc1bf);
        const _0x3c4f4f = {
          'quoted': _0x5197f5
        };
        await _0x3503fb.sendMessage(_0x1c41ff.user.jid, {
          'text': _0x22546f + _0x52b261 + " " + Buffer.from(_0x2048cf.readFileSync("./bebots/" + _0x495fd6 + "/creds.json"), "utf-8").toString('base64')
        }, _0x3c4f4f);
      }
    }
    function _0x127417() {
      _0x2048cf.writeFileSync("./database.json", JSON.stringify(global.db, null, 2));
      console.log("Database saved!");
    }
    setInterval(async () => {
      if (!_0x1c41ff.user) {
        try {
          _0x1c41ff.ws.close();
        } catch {}
        _0x1c41ff.ev.removeAllListeners();
        let _0x130554 = global.conns.indexOf(_0x1c41ff);
        if (_0x130554 < 0) {
          return;
        }
        delete global.conns[_0x130554];
        global.conns.splice(_0x130554, 1);
      }
    }, 60000);
    let _0x2a26e4 = await import("../handler.js");
    let _0x531103 = async function (_0xad7ea0) {
      try {
        const _0x41d7dc = await import('../handler.js?update=' + Date.now())["catch"](console.error);
        if (Object.keys(_0x41d7dc || {}).length) {
          _0x2a26e4 = _0x41d7dc;
        }
      } catch (_0x3bb1b7) {
        console.error(_0x3bb1b7);
      }
      if (_0xad7ea0) {
        try {
          _0x1c41ff.ws.close();
        } catch {}
        _0x1c41ff.ev.removeAllListeners();
        _0x1c41ff = makeWASocket(_0x14397a);
        _0x463bb4 = true;
      }
      if (!_0x463bb4) {
        _0x1c41ff.ev.off('messages.upsert', _0x1c41ff.handler);
        _0x1c41ff.ev.off("connection.update", _0x1c41ff.connectionUpdate);
        _0x1c41ff.ev.off("creds.update", _0x1c41ff.credsUpdate);
      }
      _0x1c41ff.handler = _0x2a26e4.handler.bind(_0x1c41ff);
      _0x1c41ff.connectionUpdate = _0x55b4e8.bind(_0x1c41ff);
      _0x1c41ff.credsUpdate = _0x5993fb.bind(_0x1c41ff, true);
      _0x1c41ff.ev.on("messages.upsert", _0x1c41ff.handler);
      _0x1c41ff.ev.on("connection.update", _0x1c41ff.connectionUpdate);
      _0x1c41ff.ev.on("creds.update", _0x1c41ff.credsUpdate);
      _0x463bb4 = false;
      return true;
    };
    _0x531103(false);
  }
  _0x597833();
};
handler.help = ['jadibot'];
handler.tags = ['bebot'];
handler.command = ["jadibot", 'botclone', "serbot", "jadi"];
export default handler;
function sleep(_0x4d30ac) {
  return new Promise(_0x274a11 => setTimeout(_0x274a11, _0x4d30ac));
}
function isBase64(_0x456aab) {
  const _0x3a05af = /^[A-Za-z0-9+/]*={0,2}$/;
  if (_0x456aab.length % 4 === 0 && _0x3a05af.test(_0x456aab)) {
    const _0x376464 = Buffer.from(_0x456aab, 'base64').toString("base64");
    return _0x376464 === _0x456aab;
  }
  return false;
}
function fileExists(_0xb78f97) {
  try {
    return _0x2048cf.statSync(_0xb78f97).isFile();
  } catch (_0x39487d) {
    return false;
  }
}