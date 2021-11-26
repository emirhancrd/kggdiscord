const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setImage("https://c.tenor.com/fJh-W38iA3oAAAAM/dance-kid.gif")
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
    name: 'dans', 
    description: 'KGG', 
    usage: 'dans'
};