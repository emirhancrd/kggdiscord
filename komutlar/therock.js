const Discord = require('discord.js');
exports.run = (client, message) => {
  
  const code = new Discord.MessageEmbed()
  
  .setColor("YELLOW")
  .setDescription('**🤨🤨🤨**')
  .setImage('https://c.tenor.com/KAQy-qL5hrMAAAAC/rock-dwayne-douglas-johnson.gif')
  message.channel.send(code);
  
}

exports.conf = {
  enabled: true,
  guilOnly: false,
  aliases: ['alkışla'],
  permLevel: 0
}

exports.help = {
  name: 'therock',
  description: '',
  usage: ''
};