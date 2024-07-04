//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94 71 678 7803";
global.owner = process.env.OWNER_NUMBER || "94 71 678 7803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURUMjA5RW9GRk83MlFzZUJXeG1DM3dQaVNnNVV1Vm1tRW9TWUlEN2gyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3RFenF5QnBlZ3hQMlRwdlZrUUk2bi9JTlBWcU5kcWVUTzZHVTdJdHhVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SVJSME1XZTZmTjRiNXg3Q0pOejFWVytQdzE5dGRiKzlyb29MUWw3U0h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNamhHcEQ5K3pXL0FsS1locTkwc0Z3cElyYXhwYnVDSWJuc090SS9TNlZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHeDhacEJ4NWJTTlJleXd6c2RLeGpUc3U1c3FORkg2cy93WWdnOTh1R2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1vQU4rZDVqdjQrMWMxalkrM1JmUGVzT2pMeUpQQU9McWtkUjJpSWFVQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNDUXFKdXgxQ0NRUDZ1UmVFUURNTXY5L1JBM3BvRThHNmtDbjlERlBsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3VoRXFrcDhtUGRhb0doMEdmR1lhck1nbGczbmhlM3JhWm1JWFM3aUsyTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF0bldIR21BWkN0S2Fkekc3dVhhY2x5SHUyeXplYW1ZYWxHdTB1dHBWTkg3c0s0OTc0STkvdTdrTDFYVVlTbG9DdmdGeSs4aFRUQnRuSXJEZU9QZEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IkdMUlFLMVFwNGhSeGlyOWVIbkZ1MjdrOUdOOWhmWVhOcmxvUGxuZGFUSG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTM2NUY5N0I2RkFBMEM2OEU3MEFEMzREOTVEMDc0NTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjI1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjZCNTI4MzUwQ0NGMDU0NDFCRDYxMzEwODk1QjM0QkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjI1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDYyRkU2ODIyMDhCRThGNUVCNjJFOTZEOUZDNzg5RkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjI1Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjBCQ0I5QUU2QzlDRDMxRDAzNDhENkU3QzJCODZFMTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjI1Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQWlYX2VXVEtUMmE1TVBCalIwSGVzdyIsInBob25lSWQiOiJkZmQyODA2ZC1jMTlkLTRiYzUtYWZjYy1lYTZiZDAxYWVhNjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick9nZUY3NjBIeWlCUGtzU0pQb0pmUVVObE4wPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNuMEo2MTJmejNPVFBjbEkrdGFGcFZKWE9IVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyTTZRVkMzTSIsIm1lIjp7ImlkIjoiOTQ3MTY3ODc4MDM6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5mCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMmgvTmtCRVAvMm03UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnL0dWUnBzRDlBVDk0UWhLd1J4L0VrVjJVQjZ5ZHZ6Y2E0bWM1Z2xJT0Q4PSIsImFjY291bnRTaWduYXR1cmUiOiJxQnc0VTlNSVdwQjJMTzczZ00vU1ZETTh0dFpxMFNwQk1meWVGNzlKSHhTNnpaSTQvZFZGQ1B0YW4zd0xVRFczQ0w3VEV3dWw0TVVwcTZyWjgvdkFEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK0F1Q0Zxb1lwU3ZudXhmcGM5MFg4N01xTEYvUHlEa0V2djdtNzFjZUdSVVpxTWhZbGxkOUUvV2JzSUowdldPK3RpU0JDZCtlNGc2MHFEeHl0TzgvQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNjc4NzgwMzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllQeGxVYWJBL1FFL2VFSVNzRWNmeEpGZGxBZXNuYjgzR3VKbk9ZSlNEZy8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxMjIyNTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRG8yIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
