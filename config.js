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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_08_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWtubGV3ampvbjRoTWJMaHl4dzl6RFU4eXhXZS9mWmFBTVhDbUFQUXczTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDg3NzQ4MjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QjY2NEZCRENFQjk2ODUxMzcyNTlFNEExMjc5Mzk4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMxMDE2ODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR1EyRkxILUZSWDZLOGxlOG5QYWFVUVwiLFxuICBcInBob25lSWRcIjogXCIxZDc4MzNhOC0wMTMzLTQ5N2ItODJiNS04Yjk4YmM3NDU4ZmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMTcwLFxuICAgICAgMTEsXG4gICAgICA5OCxcbiAgICAgIDEyLFxuICAgICAgMixcbiAgICAgIDEzMCxcbiAgICAgIDY5LFxuICAgICAgMjUwLFxuICAgICAgNDEsXG4gICAgICAxMDYsXG4gICAgICAxNDYsXG4gICAgICAxNDAsXG4gICAgICAxMTMsXG4gICAgICAzLFxuICAgICAgNjYsXG4gICAgICAxNjEsXG4gICAgICAxODksXG4gICAgICA5OCxcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAyMjEsXG4gICAgICAyMzgsXG4gICAgICA2OSxcbiAgICAgIDE5MyxcbiAgICAgIDIzMCxcbiAgICAgIDQ3LFxuICAgICAgMjUsXG4gICAgICAxMzcsXG4gICAgICAxMCxcbiAgICAgIDE1NyxcbiAgICAgIDEzOCxcbiAgICAgIDIxLFxuICAgICAgMjIxLFxuICAgICAgMTExLFxuICAgICAgMjMwLFxuICAgICAgMjQ3LFxuICAgICAgOTgsXG4gICAgICAyMDUsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0tSOTY4VEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc3NDgyMTM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNTk5NDQ1ODk4NDU1MDoxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJbTlVYIFNBVkFHRV3wn6W3XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW11NEpzREVQQ1F0TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2bmJxcjF4Qmo1R282MTJRWWU2UVBGNW8rUzZRVTBzOUdEdFAwVTBTTWo4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlA0d0xQckNSM2hjb0QrTG81all4ekFZeVRTeHM2cGlRWE1SMkxaSjBwTDFoblJ0R1RVem9yVzZ4SnZLUzVTNWNKUnhwSXJnNThGbURUQkJjRk94YUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkMwS215Y2ZJclprUkNZemY1S0tHOHpkRnJqQTFNd2poYUxYTmFMRTh3N0t1YWljME00THMvR3VrYVc3RThRNE1Rb2hXMUJCMEd3UmJkNWh2TWhtemhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc3NDgyMTM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMTAxNjgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXZ4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFdnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxTUxoa0pzNFFFT0NxMGpzeUlTT0p5TFJVU2RNTVN1VFlwVDI0QmNjUzlNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2MzUwODIzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMTAxNjg2NjIyXCJ9Igp9"  // PUT your SESSION_ID 


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
