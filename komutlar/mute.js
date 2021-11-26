const Discord = require('discord.js')



    exports.run = async(client, message, args) => {
    
		if(!message.member.roles.cache.has("708788502422224906")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Bu kodu kullanmak için gerekli yetkiye sahip değilsin.**`)
            .setColor('YELLOW')
            return message.channel.send(yetkiyok)
        }
    
        let kullanıcı = message.mentions.members.first();
        let sebep = args.slice(1).join(' ')

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setDescription(`**Lütfen Kullanıcı Belirt.**`)
            return message.channel.send(cmfhata)
        }

        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setDescription(`**Lütfen Sebep Belirt**`)
            return message.channel.send(cmfhata)
        }
        
        if(kullanıcı && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setDescription(`${kullanıcı} Kişisine ${message.author} Tarafından **${sebep}** Sebebi İle Mute Atıldı.`)
            .setFooter(kullanıcı.user.username + " Umarız Hatalarını Birdaha Tekrarlamazsın...")
            .setThumbnail(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(cmfmute)

            // Mute Atıldığında Verilecek & Alınacak Roller
            kullanıcı.roles.add('711990760961998870')
            kullanıcı.roles.remove('880483874013085806')
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Mute','MUTE','sustur','Sustur','SUSTUR'],
    permLevel: 0
}

exports.help = {
    name: 'mute'
}