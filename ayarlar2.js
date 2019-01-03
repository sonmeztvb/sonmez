const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args, member) => {

  let kufurfiltre = await db.fetch(`kufur_${message.guild.id}`)
  let kufurYazi;
  if (kufurfiltre == null) kufurYazi = 'Küfür filtresi açık değil, ayarlamak için `n!küfür-filtresi aç`'
  if (kufurfiltre == 'açık') kufurYazi = 'Küfür filtresi açık.'
  if (kufurfiltre == 'kapali') kufurYazi = 'Küfür filtresi açık değil, ayarlamak için `n!küfür-filtresi aç`'
  
const embed = new Discord.RichEmbed()
.setTitle('Ayarlar:')
.addField('Küfür engelleme', kufurYazi)
.setColor(0xFF7C00)
message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'ayarlar',
  description: 'Sunucunun ayarlarını gösterir.',
  usage: 'n!ayarlar'
};