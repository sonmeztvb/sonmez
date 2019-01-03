const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar") 
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eskilerin Gözü Yaşlı Yeniler Bu Ne La Diyor... **", `Eski Yardım Sayfamızı Hatırlayanlar Burdamı...  `)
  .addField("**Müzik Komutları**", `n!çal = İstediğiniz Müziği Başlatır. \nn!durdur = Çalan Müziği Durdurur. \nn!geç = Sıradaki Müziğe Geçer. \nn!ses = Müziğin Sesini Ayarlarsınız. \nn!çalan = Çalan Şarkıyı Gösterir. \nn!kuyruk = Şarkı Sırasını Gösterir. \nn!duraklat = Şarkıyı Duraklatır. \nn!devam = Şarkıyı Devam Ettirir.`) 
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['müzük', 'müzik', 'music', 'm'],
  permLevel: 0,
  kategori: "yardım"
};

exports.help = {
  komut: 'muzik',
  description: 'Müzik Komutlarını Gösterir.',
  usage: 'muzik'
};