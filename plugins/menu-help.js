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

    m.react("🇦🇱");
    let menu = ``;

    let txt = ""
    txt += '`ᴄʀᴇᴀᴅᴏʀ ::`' + ` Yer 🇦🇱\n`;
    txt += '`ʙᴏᴛ ::`' + ` 是ᑌᑕᕼIᕼᗩ ​ BOT🇦🇱是\n`;
    txt += '`ꜰᴇᴄʜᴀ ::`' + ` ${fecha}\n`;
    txt += '`ᴠᴇʀꜱɪᴏɴ ::`' + ` ${vs}\n`;
    txt += `${sbot}\n`;
    txt += '`ᴘʀᴇꜰɪᴊᴏ ::`' + ` [  ${usedPrefix}  ]\n`;
    txt += '`ᴜꜱᴜᴀʀɪᴏꜱ ::`' + ` ${totalusr}\n`;
    txt += '`ᴠᴇʀɪꜰɪᴄᴀᴅᴏꜱ ::`' + ` ${rtotalreg}\n`;
    txt += '`ᴀᴄᴛɪᴠᴏ ::`' + ` ${uptime}\n`;
    txt += '`ᴄᴏɴᴛᴀᴄᴛᴏ ::` #owner\n\n';
    txt += "> Yer🇦🇱⚡";

   