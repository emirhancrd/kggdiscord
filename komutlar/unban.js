const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
    
		if(!message.member.roles.cache.has("708788502422224906")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Bu kodu kullanmak için gerekli yetkiye sahip değilsin.**`)
            .setColor('#ff0000')
            return message.channel.send(yetkiyok)
        }
    
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Lütfen Kullanıcı Belirt.**`)
            return message.channel.send(cmfhata)
        }
        
        if(kullanıcı){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setDescription(`${kullanıcı} Kişisinin Mutesi ${message.author} Tarafından Kaldırıldı.`)
            .setFooter(kullanıcı.user.username + " Umarız Hatalarını Birdaha Tekrarlamazsın...")
            .setThumbnail(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(cmfmute)

            // Mute Kaldırıldığında Alınacak & Verilecek Roller
            kullanıcı.roles.remove('711990760961998870')
            kullanıcı.roles.add('770776701797924875')
        }

    } 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['UnMute','UNMUTE','susturmakaldır','Susturmakaldır','SUSTURMAKALDIR'],
    permLevel: 0
}

exports.help = {
    name: 'unmute'
}