const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Yetki
        if(!message.member.roles.cache.some(role => (role.name === '👑┊OWNER'))){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`Bu komudu kullanmak için gerekli yetkilere sahip olman gerek.`)
            .setColor('BLACK')
            .setFooter('KGG')
            return message.channel.send(CodeMareFi)
        }

        // Let Tanımları
        let kullanıcı = message.guild.member(message.guild.members.cache.get(args[0])) || message.mentions.members.first();        let sebep = args.slice(1).join(' ');
        let guild = message.guild;

        // Özel Zaman
        let zaman = new Date()
        let cmfzaman = zaman.getFullYear() + "." + (zaman.getMonth() +1) + "." + zaman.getDate() + " (\`" + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds() + "\`)";

        if(!kullanıcı){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Kullanıcı Belirt**`)
            .setColor('YELLOW')
            .setFooter('KGG')
            return message.channel.send(CodeMareFi)
        } else if(isNaN(kullanıcı)){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Geçerli Kullanıcı Belirt**`)
            .setColor('YELLOW')
            .setFooter('KGG')
            return message.channel.send(CodeMareFi)
        }
        if(!sebep){
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Sebep Belirt**`)
            .setColor('YELLOW')
            .setFooter('KGG')
            return message.channel.send(CodeMareFi)
        }

        if(kullanıcı && sebep){
            // Ban İşlemi
            kullanıcı.ban({reason: sebep})

            // Mesaj
            const CodeMareFi = new Discord.MessageEmbed()
            .setDescription(`
                \` ˑ \`Banlanan Üye - **${kullanıcı}(\`${kullanıcı.id}\`)**
                \` ˑ \`Banlayan Yetkili - **${message.author}(\`${message.author.id}\`)**
                \` ˑ \`Ban Nedeni - **${sebep}**
            `)
            .setColor('YELLOW')
            .setFooter('KGG | ' + cmfzaman)
            message.channel.send(CodeMareFi)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Ban','BAN','YASAKLA','Yasakla','yasakla'],
    permLevel: 0
}

exports.help = {
    name: 'ban'
}

