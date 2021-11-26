const Discord = require ("discord.js");
exports.run = (client, message) => {
    let deathhcodeteam = new Discord.MessageEmbed()
    .setDescription('davet linki https://discord.gg/PK6ZB4VJuT')
    message.channel.send(deathhcodeteam)
    };
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ['oy-linkim'], 
    permLevel: 0 
};
  exports.help = {
    name: 'davet', 
    description: 'Deathh code team', 
    usage: 'oy'
};