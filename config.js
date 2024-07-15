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
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
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
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lrTXo5WUFlSnhhRTFONkwxbnZVMWtkVlNDbUUrb2V1S3Bac01WRk5tZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHlEMjhBKzBkRGo5dVgwempCSUFEd0xYYlJwaWNtaWZaNmJOekJlcFlHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR2plKzdUeTJxU040a1NOVkRRU3M3RGpqYlBwaWs3akJ2dk91LzUrTjNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPOFlUWnZ1K2ZydVI2bEpsMFlrUHJDbG85emZPd015RCtLTUFUdi9oYWxBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHUUI0ZU9CYzVRWHdpOEdEMGd0Y1U3Z2tTNFZQNnE3Vms4NldSNkFXRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNkeHFYbXRzOTdOYzl6S2dkclNHazlEVUdPbVZiMytKb0ZZc1JZc3N3ZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0M0UUgyb0c3NnpYMmt2RitmY2lySkZRS09KWDBNVzcza2h4dEw0VG9sMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTVXN0JtdjBubzMxdXo2SmE5UHc0U0kyN29TSEJjVnYrbnYrUjJzSzl3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkovVitZSTNnc1ZQeXhzVjR2S1FTaGxFdDJ1UmVHL3duSjB3UU52ZTdvZjdNczdIQVE4dWZ6aDRObndBNGR5RTJ6bFNOakVPZk1iN0o1Nk5KRFF3Tmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiI5OXVHdDRqd0RtNkVsWkl0Y2M2akRCVEdXOWVqclcvOUE0MjRkWldYOHdNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0MDEyNTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM1MTNFNDlDODZERjQyREVEN0IzNUYzQUY2MjY2NzlBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEwNzI5NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0MDEyNTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVGNEFFODMxQzQ3NUI1NDczM0M4MzYwQThBMjk0MENBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEwNzI5NTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0MDEyNTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyQkJBOTQzRjIyRUI5NTAyODlFRkFEMzI5NzVBRUYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEwNzI5NTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlAwVWZ3RlRFUTFhNENVVWtsMVl2cWciLCJwaG9uZUlkIjoiMzdmM2Y1ODQtNmY0Ni00ZjEyLWJkNTctNTM1ZDQyZTQwMGVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE5QWgwdVBQV1RVQTJvWlpocmZFQkx1L2E2TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TzR4dncrZ3g0eDBEUlFoQnJnT1FSKzI2QTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTYzSEZCSk4iLCJtZSI6eyJpZCI6Ijk0NzA0MDEyNTMzOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oOd4oOd8J2QjfCdkIjwnZCC8J+Vs++4jyDihKLwnZCD8J2QgPCdkIbwnZCA8J2QmPCdkIDwn5Kr8J+lui4uLi4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lTbTROWUVFS2Y2MWJRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlEzU3VrY0xYRHpuZDVyemlnK1h6U3ZrWmg0UTlST2FBeTY2bXpVcHBqRmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inl0K2pKUG56Q0g2ZlhYM2g0djkwRTdSMWx3dWtVaG40QXBLcVJIMUhXSlc3cCtZN3pXNGQwbTJoaUk2YVR1U3A0NkM3MzRnZkFCOE9iMUpobTcwM0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6bFFXZzBPWVFYMVcyNzVMbkh1aEEvZVVnMERVSUpkanVFb2dDZ2s1K2U1MWIrRFhTRlRscUdiSGd0S216Um5HOWxQcFczZlF2ZktaM29rUDZVVGRqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA0MDEyNTMzOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVU4wcnBIQzF3ODUzZWE4NG9QbDgwcjVHWWVFUFVUbWdNdXVwczFLYVl4WCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTA3Mjk0NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQV1MifQ==|
  
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
