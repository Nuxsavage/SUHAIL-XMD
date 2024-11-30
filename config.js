const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347072189739";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_25_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDM0LFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsSEFlMnRzTkZzVTcyUmFnb0liZC9vbkRPY20rY2lYSCtTdFl4eVFhRCtvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuZkpjTjNnX1NKMmFRMld0a1p3RGNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2NDM4ZGU2LTQ4Y2EtNGM0MC05OWM4LTIyZTJjMjQ5ZDEwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAyMjYsXG4gICAgICAyMTQsXG4gICAgICA3MSxcbiAgICAgIDgsXG4gICAgICAxNjksXG4gICAgICAzMSxcbiAgICAgIDI1MixcbiAgICAgIDIxMCxcbiAgICAgIDAsXG4gICAgICAzNyxcbiAgICAgIDg3LFxuICAgICAgMjQ4LFxuICAgICAgNjAsXG4gICAgICAzMixcbiAgICAgIDQzLFxuICAgICAgNDgsXG4gICAgICAxOTIsXG4gICAgICAyMDUsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAyMDQsXG4gICAgICAxNTMsXG4gICAgICAxNyxcbiAgICAgIDIzMCxcbiAgICAgIDE1LFxuICAgICAgNjIsXG4gICAgICA4OCxcbiAgICAgIDEyMixcbiAgICAgIDIwLFxuICAgICAgMTEwLFxuICAgICAgMTI0LFxuICAgICAgMTAwLFxuICAgICAgMjQ5LFxuICAgICAgNTcsXG4gICAgICAzNSxcbiAgICAgIDE0MSxcbiAgICAgIDEwMSxcbiAgICAgIDM4LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUE1aOEZDWUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzIxODk3Mzk6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOVVggU0FWQUdFXCIsXG4gICAgXCJsaWRcIjogXCI3MTk3OTk2MDkyNjQwNjoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeVQzT0VIRU91OXJyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNnOWt6eWx6UEhZYlFqQXJqZDNoWFM5TlpYRWErd1NYblF6RGliUU9OUms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV0xFVVo3NUM2bVBwQnAzU2JHMVhGTWRDTUpxdVFBZFM1MkJIdWhMUWxSSDBhWGZoUE9TbTgwZVRaNlV3RWtRbTVMRGlURjdPUVppcDVhSU9oMUtuQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwielk1bUxWR2V3Qk9UMnd5ajRvT0NpSWpmNnJiY1BROGJjYzFsd2N3cjRoSDNPS3dOQVBpOFdxWHlpMnB6dHhERG5ReExRTEd1RURQQXgwNnIrTjRnaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3MjE4OTczOToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwMDkxMzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLTTNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtNMy5qc29uIjogIntcImtleURhdGFcIjpcIkhrTlc0RWRuTW1UYlRTaVRoa21wTmI2MmV4cC9BNURqS0k4Rm5OL2tHelU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4Mzk4MTgxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "NUX SAVAGE" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "NUX SAVAGE",
  packname: process.env.PACK_NAME || "NUX SAVAGE",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "NUX SAVAGE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
