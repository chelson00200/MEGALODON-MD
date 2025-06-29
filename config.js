// Powered by DybyTech
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~xJR1GZxQ#acC0SPCtl3uViMEePRjfnzKcCbbGumZdEmf6qw9n07k",
// ajoute Id Sesyon ou
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// fè estati a vre oswa fo otomatikman
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "fo",
// fè estati a vre si ou vle repons otomatik sou estati a
AUTO_STICKER: process.env.AUTO_STICKER || "vre",
//fè vre si ou vle yon fich otomatik
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "vre",
// fè vre si ou vle yon repons otomatik sou estati a
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*MEGALODON-MD TE WÈ ESTATI W LA 🤍*",
// mete mesaj repons otomatik la sou repons estati a
BYENVINI: process.env.BYENVINI || "vre",
// vre si ou vle yon mesaj byenvini ak orevwa nan gwoup yo
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "fo",
// fè vre pou konnen kiyès ki revoke oswa monte yon manm nan gwoup la
ANTI_LINK: process.env.ANTI_LINK || "vre",
// fè anti-link vre,fo pou gwoup yo
ANTI_DELETE: process.env.ANTI_DELETE || "vre",
// mete vre fo pou anti efase
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "bwat resepsyon",
// chanje li an 'menm' si ou vle voye mesaj efase a ankò nan menm chat la
MENTION_REPLY: process.env.MENTION_REPLY || "fo",
// mete vre si ou vle yon repons vokal otomatik si yon moun mansyone ou
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/2ozipw.jpg",
// ajoute yon meni pèsonalize epi mansyone URL imaj repons lan
PREFIX: process.env.PREFIX || ".",
 // add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐌𝐃",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "༺᭄࿐𒋲𒋲CHELSON𒋲𒋲༺᭄࿐",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links without removing member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "18296026930",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴅʏʙʏ ᴛᴇᴄʜ",
// add bot owner name    
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// anti bad words  
MODE: process.env.MODE || "public",
// public/private/inbox/group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// kick user if share link 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// show typing status   
READ_CMD: process.env.READ_CMD || "false",
// mark commands as read 
DEV: process.env.DEV || "18296026930",
// your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// anti view once 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// auto recording status 
};
