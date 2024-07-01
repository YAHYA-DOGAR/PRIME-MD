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
global.devs = "923419159670";
global.sudo = process.env.SUDO || "923419159670";
global.owner = process.env.OWNER_NUMBER || "923419159670";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923xxxxxxxxxx";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "923xxxxxxxxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "923xxxxxxxxxxx";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU096OUVDdURNdkM0TW1jNXRXSTVtc0tDWXNhZUZwNGV0cC9qcEQxa0MyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnhoSXJqc1FKSjRTTWNodGNiOFE1WitSUWNqSVI2VWpRclNqeFM4eE5nUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUEZFTlUyMHQ1bW1QSWNrSm5VbVl6NmhVNndkY1NuR3pjaG14dUxoWUY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkT0JEZlNYQStCOHJxUlQyY1ZYNVg2YjZZbmxwOFArdmhEV1FvWWg2bzBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGcFU2OG8zcGZTeXVoSXgycnpKUUJQeklwVk1RNkFodG50RjR2T0p0RXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFN0IxZ1cvUzIrSWh2ai9YNUV3VnNGeUhscjJDZG1TWnNtTVBSWnZFWEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNlblRhZVNLdzFsbzlZSDR5ZGhsRHhPY05UKzh6L0tjT2NNVkZmK1Aydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHBoTitvc0Joa0Zoc09va25jVUQ3cVBvaEMzaFYzVE1pYnFMRHl3TVVsbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMvc01ZM0x1Q2h2VHI4M2UzTVBnanJ1d2pnbU11VG1DMzZCVC9CV3N5N0R2QU1JSmVkUXhOWkhVdEJHUXNxMFBiWkZlWHhYYmxsOGRWeG1YMlFkNmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6Imt6TVA5WDE5R3BHczJLY2JGNDQrVzZtd0ZZM3pZYlhURnFiWjNpS1Z3S2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJDRE8xNjNQUS1xMnNBeE9hNWhVLXciLCJwaG9uZUlkIjoiMTkzYjNmYzctZjE0MS00YTg2LTljYmQtYzdkOTlmM2MxZWE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZqOWtpUFNJeHJxcUNuR1dUdndRSFBZRDVqaz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnJjeWxycEVJbGFFNG9XSmxvMWRMYyttVDBJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1M0NzdvQ0VQZkNpclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSHBJZVQ4MnU2MUtZa09QZUNEakFvTTZLbWhnTDk4WjlKRWxwYWJPV0Qwdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGJqMG9RWlNkNDdnY0NZS1JkbzBNWURKQUFnTDRBZkd1MjhCWFFibDBkSDhuK1daQUoremRlb1p2em9aM01Da1NzY29Cc1d3TzhRaWpueC9Jc1FqQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlNaamk1cmk2U2JqL1dqNDhnczMxR3l2QjJ2T1BoWk4rRFN3UFBGdTR2YjhSeXBoWll1ZEVjZFhlMUxXZnhET2plUWdwcjdqRktsUy9DVVliNGgxM2l3PT0ifSwibWUiOnsiaWQiOiI5MjMzMTM3NTkxMTI6MzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Y634Y+s4Y+C4Y+X4Y634Y634Y+X4Y60IOGPl+GPleGPh+GPl+GOtCIsImxpZCI6IjIxOTgwMzg5MzY5MDQxNTozOEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzEzNzU5MTEyOjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlI2U0hrL05ydXRTbUpEajNnZzR3S0RPaXBvWUMvZkdmU1JKYVdtemxnOU0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTgzNzA1MCwibGFzdFByb3BIYXNoIjoiM0w3ZEZFIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQZHAifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-M-ASWAD",
  author: process.env.PACK_AUTHER || "M ASWAD",
  packname: process.env.PACK_NAME || "M ASWAD",
  botname: process.env.BOT_NAME || "M ASWAD",
  ownername: process.env.OWNER_NAME || "M ASWAD",
  errorChat: process.env.ERROR_CHAT || "923419159670",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
