const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
     let vol = args.join(" ");
const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
if (voiceConnection === null) return message.channel.send('No music being played.');
const dispatcher = voiceConnection.player.dispatcher;

if(!vol) {
    return message.channel.send(`Volume is required.`);
}
		if (vol > 200 || vol < 0) return message.channel.send('Volume out of range!').then((response) => {
			response.delete(5000);
		});

        let embed = new Discord.RichEmbed()
        .setDescription("Volume set to " + vol)
        .setColor('#A65EA5')
		dispatcher.setVolume((vol/100));
		message.channel.send(embed);

};
  

