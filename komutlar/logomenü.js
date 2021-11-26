const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("YELLOW")
.setAuthor(" KGG")
.setTitle(" ➤KGG logo menüsü komutları" )
 .setTimestamp()
.setDescription(" **!altın** \n **!anime** \n **!arrow**  \n **!green** \n  **!habbo** \n **!kalın** \n  **!neonmavi** \ ")
.setImage("https://cdn.discordapp.com/attachments/911329563840217232/912823581518487592/logo_menu.jpg")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'logomenü'
}