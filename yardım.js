const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ѕσηмєzтν`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://bit.ly/2Pz3c3D) | [WebSite!](https://metal-makeup.glitch.me/) | [Destek Sunucumuz](https://discord.gg/3s4XBPf)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`ѕσηмєzтν - Yardım`, `:white_small_square: | **/anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **/eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **/yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **/kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **/müzik**: Müzik ruhun gıdasıdır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands', '<@522005758401839116> yardım'], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: 'yardım [yazdırmak istediğiniz şey]'
};