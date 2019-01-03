const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "Kayıtlı Üye");
  var rol = message.guild.roles.find(rol => rol.name === "Kayıtsız Üye");
  message.member.removeRole(rol);
  message.member.addRole(role);
  message.channel.send(`**${message.author.username} kullanıcısının kaydı yaptırıldı.**`);
  message.channel.bulkDelete(2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayit', 'kaydol'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'Bu komut Sagaris Kodlamıştır',
  usage: 'kayıt'
};