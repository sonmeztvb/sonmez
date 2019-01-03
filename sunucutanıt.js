const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')

let cooldown = 8.64e+7
exports.run = async (bot, message, args) => {
      let süre = await db.fetch(`lastTanit_${message.guild.id}`)
      
      if (süre !== null && cooldown - (Date.now() - süre) > 0) {
        let timeObj = ms(cooldown - (Date.now() - süre))
      message.channel.send(`Sunucunu zaten tanıtmışsın! Tekrar tanıtmak için **${timeObj.hours} saat ${timeObj.minutes} dakika** beklemelisin!`)
      } else {
      
      
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Üzgünüm ama `Yönetici` yetkin yok!')
  var channel = bot.channels.get('525942737409671188')
    const asdf = await bot.channels.get(message.channel.id).createInvite({ maxAge: 0})

  const embed = new Discord.RichEmbed()
  .setTitle("» ѕσηмєzтν | Sunucu Tanıt")
  .setDescription("Sunucunuz destek sunucumda tanıtıldı!")
  .setColor('GREEN')
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» ѕσηмєzтν | Sunucu Tanıt")
  .addField('**» Tanıtan: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
      .addField('**» Sunucu linki:**', asdf.url)
      .setThumbnail(message.guild.iconURL)
  .setColor('#edc528')
      channel.send(invite)
        db.set(`lastTanit_${message.guild.id}`, Date.now())
      }
    }

  

  
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanıt',
  description: 'Sunucunuzu 24 saat sonra tekrar tanıtır.',
  usage: 'sunucutanıt'
};
 