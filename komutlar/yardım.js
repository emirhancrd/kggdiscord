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
:white_small_square: | **!test:** = botun çalıştığınız yada çalışmadığı söyler
:white_small_square: | **!therock:** = bakış atar
:white_small_square: | **!oylama:** = oyalma yaprsınız
:white_small_square: | **!yaz:** = istediğiniz yazıyı yazar
:white_small_square: | **!wasted:** = etiketlenen kişiyi yakalar
:white_small_square: | **!kalın:** = kalın fontunda logo hazırlar
:white_small_square: | **!altın:** = altın fontunda logo hazırlar
:white_small_square: | **!anime:** = anime fontunda logo hazırlar
:white_small_square: | **!green:** = green fontunda logo hazırlar
:white_small_square: | **!habbo:** = habbo fontunda logo hazırlar
:white_small_square: | **!kırmızı:** = kırmızı fontunda logo hazırlar
:white_small_square: | **!türk:** = türk gif atar
:white_small_square: | **!havadurumu:** = yazdığınız bölgenin hava durumunu söyler
:white_small_square: | **!toplamkomut:** = toplam komutu gösterir
:white_small_square: | **!ping:** = botun pingini gösterir
:white_small_square: | **!yazan-kazanır:** = verilen cümleyi ilk yazan kazanır
:white_small_square: | **!nuke:** = yazılan kanala silip yeniden aynı şekilde kurur
:white_small_square: | **!kick:** = etiketlediğiniz kişiyi sunucudan atar
:white_small_square: | **!kapaklaflar:** = rastgele kapak laf söyler
:white_small_square: | **!espri:** = espri yapar
:white_small_square: | **!ban:** = etiketlediğiniz kişiyi banlar
:white_small_square: | **!dans:** = dans gif atar
:white_small_square: | **!alkış:** = sizi alkışlar
:white_small_square: | **!türk:** = türk gif atar
:white_small_square: | **!yavaşmod:** = belittiğiniz sayıda kanalı yavaşlatır
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

  aliases: ["help"]

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}