import ws from 'ws';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

    global.conns.forEach((conn) => {
        if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
            uniqueUsers.set(conn.user.jid, conn);
        }
    });

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;

    let totalusr = Object.keys(global.db.data.users).length;
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let sbot =
        conn.user.jid == global.conn.user.jid
        ? "`ʙᴏᴛ ::` Principal"
        : "`ꜱᴜʙʙᴏᴛ ᴅᴇ ::`" + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: ``,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("🤍");
    let menu = ``;

    let txt = ""
    txt += '`ᴄʀᴇᴀᴅᴏʀ ::`' + ` Angel-OFC\n`;
    txt += '`ʙᴏᴛ ::`' + ` GenesisBot-MD\n`;
    txt += '`ꜰᴇᴄʜᴀ ::`' + ` ${fecha}\n`;
    txt += '`ᴠᴇʀꜱɪᴏɴ ::`' + ` ${vs}\n`;
    txt += `${sbot}\n`;
    txt += '`ᴘʀᴇꜰɪᴊᴏ ::`' + ` [  ${usedPrefix}  ]\n`;
    txt += '`ᴜꜱᴜᴀʀɪᴏꜱ ::`' + ` ${totalusr}\n`;
    txt += '`ᴠᴇʀɪꜰɪᴄᴀᴅᴏꜱ ::`' + ` ${rtotalreg}\n`;
    txt += '`ᴀᴄᴛɪᴠᴏ ::`' + ` ${uptime}\n`;
    txt += '`ᴄᴏɴᴛᴀᴄᴛᴏ ::` #owner\n\n';
    txt += "> ʙʏ : ᴀɴɢᴇʟ ᴏꜰᴄ ʏ ᴛɪᴛᴀɴɪᴜᴍ ᴛᴇᴀᴍ";

    let listSections = [];

        listSections.push({
        title: `🔖 SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular Génesis`,
        rows: [
            {
                header: "𝗔𝗨𝗧𝗢 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗥 ✅",
                title: "",
                description: `Verificacion Automáticamente`,
                id: `.reg Genesis.18`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 🤍",
                title: "",
                description: `MENU COMPLETO`,
                id: `.allmenu`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦 🔊",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘢𝘶𝘥𝘪𝘰𝘴`,
                id: `${usedPrefix}menuaudios`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪 🔞",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦`,
                id: `${usedPrefix}labiblia`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦 🎮",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴`,
                id: `${usedPrefix}gamemenu`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 📥",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴`,
                id: `${usedPrefix}menudl`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗔𝗜 🤖",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘐𝘈-𝘉𝘰𝘵`,
                id: `${usedPrefix}menuai`,
            },
            {
                header: "𝗥𝗘𝗗𝗘𝗦 𝗠𝗮𝘅-𝗕𝗼𝘁 🍄",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢𝘴 𝘳𝘦𝘥𝘦𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}redes`,
            },
            {
                header: "𝗚𝗥𝗨𝗣𝗢𝗦 ☁️",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}grupos`,
            },
{
                header: "𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 𝗕𝗢𝗧 ⚡",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}ping`,
            },
{
                header: "𝗗𝗢𝗡𝗔𝗖𝗜𝗢𝗡 𝗕𝗢𝗧 ☕",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘵𝘰𝘥𝘰 𝘥𝘦 𝘥𝘰𝘯𝘢𝘳`,
                id: `${usedPrefix}donate`,
            },
        ],
    });

    
let urls = [
"https://telegra.ph/file/fa9c0515f3b2f6df9f2bd.mp4",
"https://telegra.ph/file/0779e78886636806c7422.mp4", 
"https://telegra.ph/file/d791a9594ac30fbf97183.mp4", 
"https://telegra.ph/file/6a0a1eabb9b50b9744543.mp4", 
"https://telegra.ph/file/4f8676c687995ec8333cb.mp4",
"https://telegra.ph/file/c4c2f5d0931ac30accca2.mp4", 
"https://telegra.ph/file/0a9683f4aedcae4eca935.mp4", 
"https://telegra.ph/file/3ba419b5970c3812dbac6.mp4", 
"https://telegra.ph/file/c023e62cf15c5cb85caab.mp4", 
"https://telegra.ph/file/636df9fe26f85b6fd2ade.mp4" 
];
let gifUrl = urls[Math.floor(Math.random() * urls.length)];
await conn.sendMessage(m.chat, {video: {url: gifUrl}, gifPlayback: true, caption: text.trim(), mentions: [m.sender]}, {quoted: m});

handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;