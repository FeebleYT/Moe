const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('message', async message => {
  if(message.content.toLowerCase() === `<@${client.user.id}>`){
    const embed = new Discord.RichEmbed()
    .setTitle(`__Moe's Prefix & Help__`)
    .setDescription([`
    Use \`${config.prefix}help\` to get all my commands.
    `])
    .setColor('#A65EA5')
    return message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }
});

client.login(config.token);