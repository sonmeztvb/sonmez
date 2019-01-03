//Bu komut H3CK4R Aittir

const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

  let sayfalar = [`**Prefix: s!**\nBir problemin var mı?, Yardım sunucusuna gel - --> (Eklenecektir)\nAnlık Komut Sayımız: ${client.commands.size}`,`**Ping**\nping` ,'**Yetkili Komutlar**\n'+ client.commands.filter(cmd => exports.help.category === 'admin').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"), '**Yardım Komutları**\n'+client.commands.filter(cmd => exports.help.category === 'util').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),'**Resim Komutları**\n'+client.commands.filter(cmd => exports.help.category === 'photo').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),'**Eğlence Komutları**\n'+ client.commands.filter(cmd => exports.help.category === 'fun').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),'**Müzik**\nmüzik','**NSFW :x:**\n'+ client.commands.filter(cmd => exports.help.category === 'nsfw').map(cmd => '\ ' + exports.help.name + '\ ').join("\n")]; 
  let sayfa = 1;

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setDescription(sayfalar[sayfa-1])

  message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
      msg.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);


      backwards.on('collect', r => {
        if (sayfa === 1) return;
        sayfa--;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

      forwards.on('collect', r => {//bu komut H3CK4R Aittir 
        if (sayfa === sayfalar.length) return;
        sayfa++;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

    })

  })
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gelişmekteyardım","demoyardım","h","dy"],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'yardım2',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'yardım'
};