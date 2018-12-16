const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const moment = require('moment');
    require('moment-duration-format');
    const embed = new Discord.RichEmbed()
    .setTitle('__Moe\'s Info__')
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`Hiya, i'm Moe your personal listen.moe stream radio ^^`)
    .addField('__Guilds__', client.guilds.size, true)
    .addField('__Users__', client.users.size, true)
    .addField('__Emojis__', client.emojis.size, true)
    .addField('__Channels__', client.channels.size, true)
    .addField('__Uptime__', moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
    .addField('__Memory Usage__', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
    .addField('__Prefix__', `\`${config.prefix}\``, true)
    .addField('__Developer__', '<@484765734803734540>', true)
    .setFooter('Moe | By: etcroot#7884')
    .setColor('#A65EA5')
    return message.channel.send(embed);

}
