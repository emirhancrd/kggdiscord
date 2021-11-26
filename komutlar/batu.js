const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setDescription('**MODERATÖR**')   .setColor("YELLOW")
message.channel.send(embed)
};exports.conf = {
enabled: true,
guilOnly: true,
aliases: [],
permlevel: 0
};exports.help = {
name: 'batu',
usage:'batu'};