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

global.api_smd = 9
global.SESSION_ID =
  process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BUYzBpbkpPSW90YUNyQ0RlcFNTdkJsMW5ldWpWc2RXR2JQNG1GUXpsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFc3djlDT1c2UTliaUZOT0hBVmVDS1UxcUp5dnUwSlhwc2NTSGN3dHoxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTDBKaHBDbytocCtObkJsT01FNk5zeVBLR2JleHFzMzlJdEs2S0R6bjJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbDMxMWlXMkFFakl4RmJnMkJ1dVJtT2lZRHNFQzQvVmpWWlZsZGFqaEEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBT1VXdE1LZ1BTQkZ6ak1GL0NTc3hSdUI5YVNsM2MvTnBKejFLeUtvbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCN3hNeEJSQ0ovK3hIZ0NXcEV5Q2lZcGlsU0p5L2JqV0NyYU5PdzIyVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURmMjJOdVdPMmN6amJZOStWYlBua3A3ZkpxNmplbTQ1WEhKV0xaVTZWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjZRSTNmbUUrR0w5TXk4L0ZmRFU2czhYZXNWeWtuWVd1TTNybUhqMXBrTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRoR2g1aXo1bTJrek44K2ZkVnlOcmV0R0JOUXg5MVpoMFlCUlhNdXBqRzc5NTMrWU4rT25wbGRncUVJTnVqRUFTbEI2SS8zR2hyS2tqQ1I5eERpVER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiJ3cWtXWEFLcnRISUQ2NEE2R1kyeEN4NDFsdHZOMGFVQm9EY2c1cHNVTzIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhNGlvVVpvelEzdW95TjlEVkR3bkFnIiwicGhvbmVJZCI6IjUzMzhiMDIzLTliMTctNGEyMi1iMzI5LTNmMGVmNDQ0OTlkNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtalRxVEp2L24rdnNUN0FYOWx2Mm5xc2MxNDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JZY0lyZnlWOUdXdGpuMGdFek1vd2piSVJzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxDR0dZSjFHIiwibWUiOnsiaWQiOiI5MjM0NDAzNDg1NzE6MjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIcGpyOENFTzJBbjdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhHVDgxMXB1a3pVYjhNcEJmb21WNXVpckYyWktIamQrUE9hSkVTREt6M0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9NL05JdFZIMkFHWTRwb0daU0E4bGZ2TXFyRFZXcEROdzVwbHRFWGFKMlAzd2tCd3g4TEVmTDc3L01tRmhZSGc2VHdjV0Z3N1hlRk5yUGordHF1L0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtakFXTlNtV0E1Vjd6bGQ5UW9Jd3V4bkVZZXptbDFxcVBaa2JJS0lCT3ZrUEVnTlp2R2F1cUdIRmVSSXppaUExekt3YVpCY1VXVjdmWFBKaWkwazNCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ0MDM0ODU3MToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZUmsvTmRhYnBNMUcvREtRWDZKbGVib3F4ZG1TaDQzZmp6bWlSRWd5czl5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTcyNjY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtzaiJ9
  ejyb=="
module.exports = {
  menu: process.env.MENU || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5zR0I4Y0VKMENleExEbHhIa2k0NVQvRVh0Sk1uOTNUY1ZtSi8xR2EwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGZOWHJRVkwvWDNYbG1rV2ZDc0NsQUVjcENFakc2SnpQMDRmbGRQcUxEOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1S05BQnBaTzZaOHRiK3d2NmJWUG1mbC8rOVVWMXI2RnVLRkdINHpKT0ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRlIxK00yQXQ4V0FJQXpjcHppbXNzNlZhOXJhbDRBN2tUa3ZkK2NqdWxvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDN0FuMWEwK045RUxhK3VqcGJJbk9wNHNNaHlqTm1TSFJJUTFlRkFMbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPTjJ2ei80dkVXWElHQThjaG5FdFZ6YU5PcEVJV200NWZmWDlyY2M2alE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1B6UHRmVUw1NDExd296OXNVdDkxVWNaMmc2VkpvMFNBWk1Qb04yUFAxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHY1RUdkenAybHRBTm55UzlRZFNjaW5OUVNRQUpuR0htdzBNS2lwMzczWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1oTG1EVk1lSUVqUDY5ZDI0clZYM3J4dVY5cHJuSkd6NWFJdElVRklHQlJVYVhsU2IyVnZqamE1MjdRWXpkWlpUczVaNW9zcWYvYWRJNkNmOWtDL0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJacDRxTU5vZ2p2eVZqREVPWE5kTlVMWGxGY2IzS25FUmtzNVFqUUFJZU9zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOYjMtTVVsbFRvT0R0Y1RyeWh0Wm1BIiwicGhvbmVJZCI6IjgxMTgxNDdlLTE5YjAtNDUzNS05Y2M5LWI5Zjg4NGU1MmVlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTK0dBak5MWkZWZyttczZlaHo2VDFGSzM2VDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3BMWFNEMmFER3VPK1czWkxKRGthVDk0cFc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpKTUw5R1A0IiwibWUiOnsiaWQiOiI5MjM0NDAzNDg1NzE6MjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tQcGpyOENFTGk1bjdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhHVDgxMXB1a3pVYjhNcEJmb21WNXVpckYyWktIamQrUE9hSkVTREt6M0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktVNDl0SWFHWTF3MWhxVVluZ3NIM0l0aE52bkhHOEdLaUlxbmV2aEkzR2pOU2dNN21mV1RRdkJTblZNcmdTRmVpbTMyVStCNWtxSGY0V1FmMVJBWENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaTWh1b1cwYjBpR2c3VlFXOUVucHdIT2pUSmR0VklGQ2ZQOFNUSlAyWXJQWThUbGZHV29VWFBnWjlZNFM1V2hrZUhvZDloV3hHdVV0WnZEZ05WKzhEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ0MDM0ODU3MToyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZUmsvTmRhYnBNMUcvREtRWDZKbGVib3F4ZG1TaDQzZmp6bWlSRWd5czl5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTc5OTEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtzaiJ9",
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
