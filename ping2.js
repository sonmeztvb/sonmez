const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
 db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Olamaz sen botun karalistesinde bulunuyorsun.')
    }
message.channel.send(`Pong! **${client.ping}ms**`)
 });

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ping2',
  description: 'Karalisteli ping komutu',
  usage: 'ping2'
};