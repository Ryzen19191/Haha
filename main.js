process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import _0x40c132 from 'dotenv';
import { createRequire } from 'module';
import _0x1a3cc0, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
import 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x3f6135 from 'yargs';
import { spawn } from 'child_process';
import _0x3b9bed from 'lodash';
import _0x3b522a from 'chalk';
import _0x56356b from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import _0x3b24fe from 'pino';
import _0x4fcd4a from './lib/cloudDBAdapter.js';
import { MongoDB } from './lib/mongoDB.js';
import { PostgresDB } from './lib/postgresDB.js';
import _0x566b52 from './lib/store.js';
import { Boom } from '@hapi/boom';
import 'moment-timezone';
import _0x17f7f3 from 'node-cache';
import _0xaa4e82 from 'readline';
import _0x4a3ced from 'fs';
import _0x4daff7 from './lib/princesession.js';
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  proto,
  delay,
  jidNormalizedUser,
  PHONENUMBER_MCC,
  Browsers
} = await (await import('@whiskeysockets/baileys'))['default'];
_0x40c132.config();
async function main() {
  const _0x2fb205 = process.env.SESSION_ID;
  if (!_0x2fb205) {
    console.error("Session variable not found.");
    return;
  }
  try {
    await _0x4daff7(_0x2fb205);
    console.log("processTxtAndSaveCredentials completed.");
  } catch (_0x2979ac) {
    console.error("Error:", _0x2979ac);
  }
}
main();
await delay(10000);
const {
  chain
} = _0x3b9bed;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.__filename = function filename(_0x367b49 = import.meta.url, _0xe38e30 = platform !== "win32") {
  return _0xe38e30 ? /file:\/\/\//.test(_0x367b49) ? fileURLToPath(_0x367b49) : _0x367b49 : pathToFileURL(_0x367b49).toString();
};
global.__dirname = function dirname(_0x3ec157) {
  return _0x1a3cc0.dirname(global.__filename(_0x3ec157, true));
};
global.__require = function require(_0x5c18ce = import.meta.url) {
  return createRequire(_0x5c18ce);
};
global.API = (_0x4b2d39, _0x3d8486 = '/', _0x45b1a2 = {}, _0x5716ea) => (_0x4b2d39 in global.APIs ? global.APIs[_0x4b2d39] : _0x4b2d39) + _0x3d8486 + (_0x45b1a2 || _0x5716ea ? '?' + new URLSearchParams(Object.entries({
  ..._0x45b1a2,
  ...(_0x5716ea ? {
    [_0x5716ea]: global.APIKeys[_0x4b2d39 in global.APIs ? global.APIs[_0x4b2d39] : _0x4b2d39]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x3f6135(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (process.env.PREFIX || "‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.opts.db = process.env.DATABASE_URL;
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new _0x4fcd4a(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? new MongoDB(opts.db) : /postgresql:\/\/|postgres:\/\//i.test(opts.db) ? new PostgresDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x234fb5 => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x234fb5(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFile = "sessions";
const {
  state,
  saveState,
  saveCreds
} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterCache = new _0x17f7f3({
  'stdTTL': 0x0,
  'checkperiod': 0x0
});
const userDevicesCache = new _0x17f7f3({
  'stdTTL': 0x0,
  'checkperiod': 0x0
});
let phoneNumber = global.botNumber[0x0];
const methodCodeQR = process.argv.includes('qr');
const methodCode = !!phoneNumber || process.argv.includes("code");
const MethodMobile = process.argv.includes("mobile");
const rl = _0xaa4e82.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x945343 => new Promise(_0x392f9e => rl.question(_0x945343, _0x392f9e));
let opcion;
if (methodCodeQR) {
  opcion = '1';
}
if (!methodCodeQR && !methodCode && !_0x4a3ced.existsSync('./' + authFile + '/creds.json')) {
  do {
    opcion = await question("\n\n\n✳️ Enter the connection method\n\n\n🔺 1 : per QR code\n🔺 2 : per 8-digit CODE\n\n\n\n");
    if (!/^[1-2]$/.test(opcion)) {
      console.log("\n\n🔴 Enter only one option \n\n 1 o 2\n\n");
    }
  } while (opcion !== '1' && opcion !== '2' || _0x4a3ced.existsSync('./' + authFile + '/creds.json'));
}
console.info = () => {};
const connectionOptions = {
  'logger': _0x3b24fe({
    'level': "silent"
  }),
  'printQRInTerminal': opcion === '1' || methodCodeQR,
  'mobile': MethodMobile,
  'browser': opcion === '1' ? ["Prince", 'Safari', "2.0.0"] : methodCodeQR ? ["Prince", "Safari", "2.0.0"] : ['Ubuntu', 'Chrome', "20.0.04"],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x3b24fe({
      'level': 'fatal'
    }).child({
      'level': 'fatal'
    }))
  },
  'waWebSocketUrl': "wss://web.whatsapp.com/ws/chat?ED=CAIICA",
  'markOnlineOnConnect': true,
  'generateHighQualityLinkPreview': true,
  'getMessage': async _0x542e55 => {
    let _0x15732b = jidNormalizedUser(_0x542e55.remoteJid);
    let _0x125584 = await _0x566b52.loadMessage(_0x15732b, _0x542e55.id);
    return _0x125584?.["message"] || '';
  },
  'patchMessageBeforeSending': async _0x38ca5b => {
    let _0x181ce3 = 0x0;
    global.conn.uploadPreKeysToServerIfRequired();
    _0x181ce3++;
    return _0x38ca5b;
  },
  'msgRetryCounterCache': msgRetryCounterCache,
  'userDevicesCache': userDevicesCache,
  'defaultQueryTimeoutMs': undefined,
  'cachedGroupMetadata': _0x12bc6c => global.conn.chats[_0x12bc6c] ?? {},
  'version': [0x2, 0xbb8, 0x3c8d6c7b]
};
global.conn = makeWASocket(connectionOptions);
if (!_0x4a3ced.existsSync('./' + authFile + '/creds.json')) {
  if (opcion === '2' || methodCode) {
    opcion = '2';
    if (!conn.authState.creds.registered) {
      if (MethodMobile) {
        throw new Error("⚠️ Mobile API Error Occurred");
      }
      let addNumber;
      if (!!phoneNumber) {
        addNumber = phoneNumber.replace(/[^0-9]/g, '');
        if (!Object.keys(PHONENUMBER_MCC).some(_0x2be962 => addNumber.startsWith(_0x2be962))) {
          console.log(_0x3b522a.bgBlack(_0x3b522a.bold.redBright("\n\n✴️ Your number must start with the country code")));
          process.exit(0x0);
        }
      } else {
        while (true) {
          addNumber = await question(_0x3b522a.bgBlack(_0x3b522a.bold.greenBright("\n\n✳️ Enter your number\n\nExample: 92309266xxxx\n\n")));
          addNumber = addNumber.replace(/[^0-9]/g, '');
          if (addNumber.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(_0x49cfbd => addNumber.startsWith(_0x49cfbd))) {
            break;
          } else {
            console.log(_0x3b522a.bgBlack(_0x3b522a.bold.redBright("\n\n✴️ Make sure to add the country code")));
          }
        }
        rl.close();
      }
      setTimeout(async () => {
        let _0x1c0c44 = await conn.requestPairingCode(addNumber);
        _0x1c0c44 = _0x1c0c44?.["match"](/.{1,4}/g)?.["join"]('-') || _0x1c0c44;
        console.log(_0x3b522a.yellow("\n\n🍏 enter the code in WhatsApp."));
        console.log(_0x3b522a.black(_0x3b522a.bgGreen("\n🟣  Its Code is: ")), _0x3b522a.black(_0x3b522a.red(_0x1c0c44)));
      }, 0xbb8);
    }
  }
}
conn.isInit = false;
if (!opts.test) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()["catch"](console.error);
    }
    if (opts.autocleartmp) {
      try {
        clearTmp();
      } catch (_0x58d2df) {
        console.error(_0x58d2df);
      }
    }
  }, 60000);
}
if (opts.server) {
  (await import("./server.js"))['default'](global.conn, PORT);
}
async function clearTmp() {
  const _0x4ff384 = [tmpdir(), join(__dirname, "./tmp")];
  const _0x58682b = [];
  _0x4ff384.forEach(_0x227b9c => readdirSync(_0x227b9c).forEach(_0x40206b => _0x58682b.push(join(_0x227b9c, _0x40206b))));
  return _0x58682b.map(_0x15a9ed => {
    const _0x10516a = statSync(_0x15a9ed);
    if (_0x10516a.isFile() && Date.now() - _0x10516a.mtimeMs >= 60000) {
      return unlinkSync(_0x15a9ed);
    }
    return false;
  });
}
setInterval(async () => {
  await clearTmp();
}, 0xea60);
global.botlive = process.env.MODE;
async function connectionUpdate(_0x55a132) {
  const {
    connection: _0x2e742e,
    lastDisconnect: _0x50e805,
    isNewLogin: _0x4addd5
  } = _0x55a132;
  if (_0x4addd5) {
    conn.isInit = true;
  }
  const _0x2d8763 = _0x50e805?.["error"]?.['output']?.['statusCode'] || _0x50e805?.["error"]?.['output']?.["payload"]?.["statusCode"];
  if (_0x2d8763 && _0x2d8763 !== DisconnectReason.loggedOut && conn?.['ws']["socket"] == null) {
    console.log(await global.reloadHandler(true)['catch'](console.error));
    global.timestamp.connect = new Date();
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (_0x2e742e === 'open') {
    const {
      jid: _0x1c62b9,
      name: _0x5bfc7c
    } = conn.user;
    let _0x2ee6fc = "ᴘʀɪɴᴄᴇ ᴍᴅ\n\nʙᴏᴛ ɪs ᴏɴʟɪɴᴇ ɴᴏᴡ✅\nʙᴏᴛ ᴍᴏᴅᴇ `" + botlive + "` \n\nʙᴏᴛ ᴘʀᴇғɪx `" + prefix + "`\nIғ ʏᴏᴜ ʟɪᴋᴇ ᴛʜᴇ ʙᴏᴛ ɢɪᴠᴇ ᴀ sᴛᴀʀ 🌟\n\nᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴅᴇᴠᴇʟᴘᴠᴇʀ ᴏғ ᴛʜɪs ʙᴏᴛ\nᴄʟɪᴄᴋ ʜᴇʀᴇ: https://wa.me/message/DCAK67ON3XVOG1\nғᴏʟʟᴏᴡ ᴛʜᴇ ᴄʜᴀɴɴᴇʟ: https://whatsapp.com/channel/0029VaKNbWkKbYMLb61S1v11\n\nENJOY💌";
    await conn.sendMessage(_0x1c62b9, {
      'text': _0x2ee6fc,
      'mentions': [_0x1c62b9]
    }, {
      'quoted': null
    });
    console.log(_0x3b522a.bold.greenBright("\n▣─────────────────────────────···\n│\n│❧ Successfully connected to WhatsApp. ✅\n│\n▣─────────────────────────────···"));
  }
  let _0x493923 = new Boom(_0x50e805?.["error"])?.["output"]?.["statusCode"];
  if (_0x493923 == 0x195) {
    await _0x4a3ced.unlinkSync("./sessions/creds.json");
    console.log(_0x3b522a.bold.redBright("[ ⚠ ] Connection replaced, Please wait a moment I'm going to restart...\nIf error appears start again with : npm start"));
    process.send('reset');
  }
  if (_0x2e742e === "close") {
    if (_0x493923 === DisconnectReason.badSession) {
      conn.logger.error("[ ⚠ ] session error please change the session by " + global.authFile + " pairing again.");
    } else {
      if (_0x493923 === DisconnectReason.connectionClosed) {
        conn.logger.warn("[ ⚠ ] Closed connection, reconnecting...");
        await global.reloadHandler(true)["catch"](console.error);
      } else {
        if (_0x493923 === DisconnectReason.connectionLost) {
          conn.logger.warn("[ ⚠ ] Lost connection to the server, reconnecting...");
          await global.reloadHandler(true)["catch"](console.error);
        } else {
          if (_0x493923 === DisconnectReason.connectionReplaced) {
            conn.logger.error("[ ⚠ ] Connection replaced, another new session has been opened. Please log out first.");
          } else {
            if (_0x493923 === DisconnectReason.loggedOut) {
              conn.logger.error("[ ⚠ ] Closed connection, Please change the session " + global.authFile + " use prince pair site or .getpair command get a new session.");
            } else {
              if (_0x493923 === DisconnectReason.restartRequired) {
                conn.logger.info("[ ⚠ ] Restart required, restart the server if you have any problems.");
                await global.reloadHandler(true)['catch'](console.error);
              } else if (_0x493923 === DisconnectReason.timedOut) {
                conn.logger.warn("[ ⚠ ] Connection time, reconnecting...");
                await global.reloadHandler(true)["catch"](console.error);
              } else {
                conn.logger.warn("[ ⚠ ] Unknown disconnect reason. " + (_0x493923 || '') + ": " + (_0x2e742e || ''));
                await global.reloadHandler(true)["catch"](console.error);
              }
            }
          }
        }
      }
    }
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x46df65) {
  try {
    const _0x36101e = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x36101e || {}).length) {
      handler = _0x36101e;
    }
  } catch (_0x574af6) {
    console.error(_0x574af6);
  }
  if (_0x46df65) {
    const _0x37f158 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x37f158
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off('message.delete', conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off('creds.update', conn.credsUpdate);
  }
  conn.welcome = "Hello @user\nWelcome to @group";
  conn.bye = "Goodbye @user";
  conn.spromote = "@user promoted to admin";
  conn.sdemote = "@user Gradient";
  conn.sDesc = "The description has been changed to \n@desc";
  conn.sSubject = "The name of the group has been changed to \n@group";
  conn.sIcon = "The group icon has been changed";
  conn.sRevoke = "The group link has been changed to \n@revoke";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  conn.ev.on('messages.upsert', conn.handler);
  conn.ev.on('group-participants.update', conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = _0x304928 => /\.js$/.test(_0x304928);
global.plugins = {};
async function filesInit() {
  for (let _0x188b38 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let _0x335be1 = global.__filename(join(pluginFolder, _0x188b38));
      const _0x27be8c = await import(_0x335be1);
      global.plugins[_0x188b38] = _0x27be8c['default'] || _0x27be8c;
    } catch (_0x3cba36) {
      conn.logger.error(_0x3cba36);
      delete global.plugins[_0x188b38];
    }
  }
}
filesInit().then(_0x314664 => console.log(Object.keys(global.plugins)))["catch"](console.error);
global.reload = async (_0x38b464, _0x3817e5) => {
  if (/\.js$/.test(_0x3817e5)) {
    let _0x5f4fe8 = global.__filename(join(pluginFolder, _0x3817e5), true);
    if (_0x3817e5 in global.plugins) {
      if (existsSync(_0x5f4fe8)) {
        conn.logger.info("🌟 Updated Plugin - '" + _0x3817e5 + "'");
      } else {
        conn.logger.warn("🗑️ Plugin Removed - '" + _0x3817e5 + "'");
        return delete global.plugins[_0x3817e5];
      }
    } else {
      conn.logger.info("✨ New plugin - '" + _0x3817e5 + "'");
    }
    let _0x34b441 = _0x56356b(readFileSync(_0x5f4fe8), _0x3817e5, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x34b441) {
      conn.logger.error("syntax error while loading '" + _0x3817e5 + "'\n" + format(_0x34b441));
    } else {
      try {
        const _0x1d3fc3 = await import(global.__filename(_0x5f4fe8) + "?update=" + Date.now());
        global.plugins[_0x3817e5] = _0x1d3fc3["default"] || _0x1d3fc3;
      } catch (_0x5f16ff) {
        conn.logger.error("error require plugin '" + _0x3817e5 + "\n" + format(_0x5f16ff) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0xc6a7cc], [_0x3ee5cd]) => _0xc6a7cc.localeCompare(_0x3ee5cd)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  let _0x553ad7 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", '-loglevel', "error", '-filter_complex', "color", '-frames:v', '1', '-f', "webp", '-']), spawn("convert"), spawn('magick'), spawn('gm'), spawn("find", ['--version'])].map(_0x5c833a => {
    return Promise.race([new Promise(_0x1cf6fd => {
      _0x5c833a.on("close", _0x55f497 => {
        _0x1cf6fd(_0x55f497 !== 0x7f);
      });
    }), new Promise(_0x86327f => {
      _0x5c833a.on('error', _0x3577c9 => _0x86327f(false));
    })]);
  }));
  let [_0x12f170, _0x25c208, _0x38a96a, _0x52f382, _0x770bc8, _0x5a2740, _0x524cad] = _0x553ad7;
  console.log(_0x553ad7);
  let _0x3fb6ea = global.support = {
    'ffmpeg': _0x12f170,
    'ffprobe': _0x25c208,
    'ffmpegWebp': _0x38a96a,
    'convert': _0x52f382,
    'magick': _0x770bc8,
    'gm': _0x5a2740,
    'find': _0x524cad
  };
  Object.freeze(global.support);
  if (!_0x3fb6ea.ffmpeg) {
    conn.logger.warn("Please install ffmpeg for sending videos (pkg install ffmpeg)");
  }
  if (_0x3fb6ea.ffmpeg && !_0x3fb6ea.ffmpegWebp) {
    conn.logger.warn("Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)");
  }
  if (!_0x3fb6ea.convert && !_0x3fb6ea.magick && !_0x3fb6ea.gm) {
    conn.logger.warn("Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)");
  }
}
_quickTest().then(() => conn.logger.info("✅Bot main file run successfully"))["catch"](console.error);