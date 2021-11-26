const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setImage("https://media.giphy.com/media/yDm4Ry6XU77Py/giphy.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'türk', 
    description: '', 
    usage: 'türk'
};