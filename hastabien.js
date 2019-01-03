const hastebin = require('hastebin-gen');
const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
  hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)

      .setURL(hastLink)
      .addField('Link:', `${hastLink}`)
       message.channel.send({embed: hastEmb})
  }).catch(console.error);  
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'hastebin',
 description: 'hastebin ',
 usage: 'hastebin'
};
