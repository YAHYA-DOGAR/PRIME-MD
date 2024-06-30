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
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/KoOxxHuMNNG7LDpOQInqmw";
global.website = process.env.GURL || "https://chat.whatsapp.com/KoOxxHuMNNG7LDpOQInqmw";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8f9689d2d786209e0f0cf.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923020733592";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9DSjF6MGEySEhyZVBHbXJHMnJBWkJ3TTZPcW1zdDhIUjhWNHpHUHBHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHVwcndtYWJWYS9GeDJpTVMxM3N4dXJoMlV3OVAwdkl0NUlDMWdFRXNtUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ05uNjlOTWJManFZbDFtbFpjd040b0FlTHl6SURaV29BYVROeXJGOVVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4VUJzRXVqN2RXNmRHVXNqcldFR1FzMTI1VlVUaVR1ci84MGJiSStES3hjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPajRqbnVVTm5oTzZtSmpmOUJXRmxkdStEcHB5MjRXbTVNcktEbzNsRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJzOTJMVzFBTUUxWGxBWU11b3dldFU4Z014VWJCZTRLNVdPM3JPSTN3QVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BkRHZ2S2dFZld2bHZzUmxPUlBRdGxmOTdrOGl3SStYT09Gdk1jSVVVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTVTN2VoMW1LUjJFdDNGL3FKTG4vQkIrRU51V3ZIbDJiWVBQOUQ5eEZ5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZqYzlrNWIxeWszN3dvQ3dCdm4wM08wWjBsNWU3TTNWOU0zWWczWDc0eVRXd2dwOHllTE9EZTltNEM5WW5DSG1pOVNIVXE2c1R6QU9xOXdDZEx4SmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiIzYkZSRDJwK2xJN0pwcE0ySVFKZ3RHQUplNzZ3UitnQXBhOWhaUGI1bkNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSZHI0Z19TOFIxYU5xUWRmQTkzYWpnIiwicGhvbmVJZCI6ImRlMDJkYzczLTNjMTctNDZjOS04YTE0LTE4NTFkMjQxYjE1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudTRzZzRWVlBUNFRrMXB3VTRMMnMzdHJVczg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGxldGlZUGlsQU8wQ2s3NlRLRjg1RWJBTmFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllXWjU2WEJDIiwibWUiOnsiaWQiOiI5MjMwMjA3MzM1OTI6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2LTbjNix2ZAg2LHYqNmR2KfZhtuMINqv2LHZiNm+In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcmZ6L2NHRU1ERGc3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwWjllRFExcy9WVlJRRjF0Rk4wKzYvbU9DdTVxd2R1aER6cU1UM2tTdm5FPSIsImFjY291bnRTaWduYXR1cmUiOiIvQWFBSnZJN0lZcnk5MTNpUVVYakEvN2owWHZTZktOQ0hUSXY5TERPc0JoTU80b0JDam5RQjVjbWUzeUFpdUhuSFpxYjJuUDhVMFIwdy8yYmpBUElDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT1R1RnZvakkrWWFMWUUxNTJRWXBqdG5MTW9uRHI1UStvMER1ZjZmQndGTmxaSzVQb3dHVE54K3ExcE5TZEM5bUsvMkgwVmlWRU1Zd1R3S2xRUlFXZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMjA3MzM1OTI6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVdmWGcwTmJQMVZVVUJkYlJUZFB1djVqZ3J1YXNIYm9RODZqRTk1RXI1eCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTcyMjQ0N30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐅𝐀𝐒𝐢𝐇-𝐔𝐑-𝐑𝐄𝐇𝐌𝐀𝐍-𝐍𝐀𝐐𝐒𝐇𝐁𝐀𝐍𝐃𝐢",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐅𝐀𝐒𝐢𝐇-𝐔𝐑-𝐑𝐄𝐇𝐌𝐀𝐍-𝐍𝐀𝐐𝐒𝐇𝐁𝐀𝐍𝐃𝐢",
  ownername: process.env.OWNER_NAME || "𝐅𝐀𝐒𝐢𝐇-𝐔𝐑-𝐑𝐄𝐇𝐌𝐀𝐍-𝐍𝐀𝐐𝐒𝐇𝐁𝐀𝐍𝐃𝐢",
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
