

const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`sohbet`);
        message.guild.createChannel(`bot-komut`);
       message.guild.createChannel(`duyurular`);
      message.guild.createChannel('Sohbet', 'voice');
    message.guild.createChannel('müzik', 'voice');
  message.guild.createChannel('💤 AFK Odası 💤', 'voice');
  message.guild.createChannel('💤 AFK Odası 💤', 'category');
  
    ///message.guild.createChannel('isim', 'voice')///
     

        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucukur'],
  permLevel: 3
};

exports.help = {
  name: 'sunucukurulum',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'kurulum'
};