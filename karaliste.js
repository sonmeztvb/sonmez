
const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`karaliste_${nesne}`, 'aktif')
  
  message.channel.send(`**${nesne}** IDli kullanıcı karalisteye alındı!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karaliste'],
  permLevel: 4
};
exports.help = {
  name: 'blacklist',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};