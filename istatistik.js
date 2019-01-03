const Discord = require("discord.js");
const moment = require("moment");

require("moment-duration-format");

exports.run = (client, message) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
message.channel.send("İstatistikler hesaplanıyor...")
.then(nmsg => nmsg.edit(new Discord.RichEmbed().addField("» İşletim istemi:","Linux - Ubuntu 18.10").addField('» Açık kalma süresi: ',`${duration}`).addField('» Sürümler:','Discord.JS:  v'+Discord.version+'\nBot:  v0.1.1').addField('» Bellek kullaımı:',(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB').addField('» Genel istatistikler','» Sunucu sayısı: '+ client.guilds.size.toLocaleString()+'\n» Kişi sayısı:  '+ client.users.size+'\n» Kanal sayısı: '+client.channels.size.toLocaleString()+'\n» Pingim:  '+client.ping).setColor('RANDOM').setAuthor('İstatistikler',client.user.avatarURL).setThumbnail(client.user.avatarURL).setFooter('ѕσηмєzтν | irfansonmez.com.tr', client.user.avatarURL)
.addField("» Linkler", `[Bot Davet Linki](https://bit.ly/2Pz3c3D)` + "**\n**"+`[WEB SİTE](http://irfansonmez.com.tr)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/3s4XBPf)`, false)
.setTimestamp())
)};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Botun istatistik gösterir.',
  usage: 'i'
};