const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('__Moe Commands__')
    .setColor('#A65EA5').setThumbnail(client.user.displayAvatarURL)
    .setFooter('Moe | By: etcroot#7884')
    .setDescription([`
    *All commands uses \`${config.prefix}\` as prefix.*

    **${config.prefix}help** → Moe's Help Menu.
    **${config.prefix}info** → Moe's Information.
    **${config.prefix}ping** → Moe's Ping.
    **${config.prefix}invite** → Invite Moe.
    **${config.prefix}support** → Moe's Official Server.
    `])
    .addField('__Music Commands__', `**${config.prefix}kpop** → Play KPOP Stream.\n**${config.prefix}jpop** → Play JPOP Stream.**\n${config.prefix}qt** → Play qtradio.moe (beta).\n**${config.prefix}leave** → Leave author VC.\n**${config.prefix}join** → Join author VC.\n**${config.prefix}volume** → Set playback volume.`, false)
    .addField('__Other Commands__', `**${config.prefix}anime** → Search or get random anime.\n**${config.prefix}manga** → Search manga's.\n**${config.prefix}moe** → Random Moe's.\n**${config.prefix}meme** → Random anime memes.\n**${config.prefix}calc** → Calculate weebness.`, false)
return message.channel.send(embed);

}
