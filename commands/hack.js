const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hack",
  description: "totally legit hacking tool",
  execute(message, args, client) {
    //Embed lol
    let embed = new MessageEmbed()
      .setColor("#42f2f5")
      .addField("Click this link for a tutorial on how to hack", "<https://youtu.be/rLz0dH0hF3g>")
    message.channel.send(embed);
  },
};
