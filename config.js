//#ENJOY
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
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "923135673658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVaejNkYm1Sa2pPZEF4Y3dpODQ0V2xURWR5MGdabW1JZmp5Z3FiZXYzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDhJcloxRGdHcG9oM1kzaS94aUFPRXMxWUJWcW1PNXF3bU9vTHh2N295UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0R1BSbkI1UUV4M25WUG5DcVBSbnM4L2lybE1tZE00SXNPdzlyNExVczBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTkxiNFM5VFVHallhWmhiQXVZMUxnWnJCemNqTDFvWTRTT2ZQUVpGSGhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JNGlTekZYWWJHVHgzTm5NNUVwZ21nMG5vdkx5NHZoSG9KSnFGWlpoRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp0L1loR0gyQWdqN0dtczhtQVAzcHJJMjBJUHF3OTBaOHNrU2NjL3BEZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1SbkFWSURaVW9MQlU5UVdXd3FNMkdiUVMzOVkrK3dwaHlSNXB5VWgyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpuWkFZQXFYalJvVjlUWEZ4V0liaC9ZOHBFOXFqVGVyZGpXRjlHcmpGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAvYU5VckhmSlVVT0R3TnZObmlBV05Lb3NGUmFjT0dEVDIwdUFRZlZUTmZTb20xVnlpSHQ0VEVoU2FYSi9CZXo2R20xY1Q2a2xzQjNMVHFBUnhyYkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJqWHlKSHliUTA5VmhLOWZVTFo0NXBsdWtLd3Y5QkhqRDZHWSt2MGNJMVhNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoMUM5Z1RwU1FJV1VoYWdZbGhqNUdBIiwicGhvbmVJZCI6IjlhZTU3MjE2LTNhNTUtNGM3Ni1iYTNlLWM1ZWRiNDIyMDc4YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMS09wVE02SmlVODllRmg2alF4VTl4ZGlmZ289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlZzYXBoeEpCSEpmMHIvZTZtaGd3a0ExTEk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpUQjY3NUEzIiwibWUiOnsiaWQiOiI5MTgxMzMwOTg2OTM6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2YPZhCDZhNit2LjYqSDZhdmGINit2YrYp9iq2Yog2YfZiiDYqNin2LPZhdmDIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYk00TjRIRU02cmdMSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3blJ6YS81ZzlnUloyQ0EwNE9sM0xySjJnQ2RPMG96ZE1vWStGbUFDUkc4PSIsImFjY291bnRTaWduYXR1cmUiOiJwWlFJTXNObm1nUW1mdDUvOGRJRFA1S2hxdDJmMHMrSVNhNjN1SndBcHA3NkNhb0d0MGxSK0xJbE1SMDFVSEF4SGM3WEtySDBzZ29MU1UyLzFnVEJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidnpDV0dIbitZVFNLMURGRkh1RTkvZjY4WUptczdVOXhoSDdmYVdUVitPc28rQStkdWQ5aklibEZhb25zeU0rUkpaOG5tZkxTMUR5VW9oclJxRmxJQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTgxMzMwOTg2OTM6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTUwYzJ2K1lQWUVXZGdnTk9EcGR5Nnlkb0FuVHRLTTNUS0dQaFpnQWtSdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTQ3NTkzMX0="
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
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-94532d03-1ca4-45a9-b965-22be0c2c9a02",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "gitanjali",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
