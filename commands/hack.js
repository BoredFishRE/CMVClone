const {
  EmbedBuilder
} = require("discord.js");

module.exports = {
  name: "hack",
  description: "totally legit hacking tool",
  execute(message, args, client) {
    //Embed lol
    let embed = new EmbedBuilder()
      .setColor("#42f2f5")
      .addFields({
        name: "Click this link for a tutorial on how to hack",
        value: "<https://youtu.be/rLz0dH0hF3g>",
        inline: false
      })
    message.channel.send({
      embeds: [embed]
    });
  },
};