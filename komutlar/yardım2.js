const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('YELLOW')
  .setTitle('KGG Yardım Menüsü')
.setImage("https://cdn.discordapp.com/attachments/911329563840217232/912825031124484106/yardm.jpg")
  .setDescription(`

==============================================

:white_small_square: | **!sunucubilgi:** = sunucuhakkında bilgi verir
:white_small_square: | **!sil:** = belittiğiniz sayıda mesaj siler
:white_small_square: | **!atatürk:** = o7
:white_small_square: | **!avatar:** = avatarınızı gsterir
:white_small_square: | **!botbilgi:** = botun bilgisini gösterir
:white_small_square: | **!üyedurum:** = toplam üye sayısını göterir
:white_small_square: | **!sunucuresmi:** = sunucunun resmini gösterir
:white_small_square: | **!id:** = istediğiniz kişinin idsini verir
:white_small_square: | **!kedi:** = kedi gif 
:white_small_square: | **!davet:** = sunucunun davet link'ini verir
:white_small_square: | **!bansay:** = toplam ban sayısını gösterir
:white_small_square: | **!yapımcım:** = yapımcımı gösterir
:white_small_square: | **!aşkölçer:** = etiketleiğiniz kişiyle aşk derecenizi gösterir
:white_small_square: | **!bug-bildir:** = botun yapımcısına bug bildirir
:white_small_square: | **!mute:** = etiketlediğiniz kişiyi muteler
===============================================

Bağlantılar 
**» Davet Linki** [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=858754363068907590&scope=bot&permissions=8)
`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["help2"]

}

exports.help = {

  name: 'yardım2',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım2'

}