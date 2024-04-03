const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "about",
  description: "About the Bot",
  aliases: ["cmvabout"],
  execute(message, args, client) {
    //embed go brrrrr
    let embed = new EmbedBuilder()
      .setColor("#42f2f5")
      .setThumbnail("https://cdn.discordapp.com/avatars/815999410327781396/7f71df8e2269680681d08e86f8c9279b.png?size=128")
      .setFooter({ text: "CMV Clone was developed by BoredFish https://boredfish.dev", iconURL: "https://cdn.discordapp.com/avatars/388813100964642816/a_f3f3f72adfde2334d6c1d2a36267a6a1.gif?size=128"})
      .addFields([
        { name: "Bot Version", value: "1.5.0"},
        { name: "Bot Edition", value: "Lite"},
        { name: "Chad?", value: "true"},
        { name: "Gamer?", value: "true"},
      ])
      /*
      .addField("Bot Version", "1.4.1")
      .addField("Bot Edition", "Lite")
      .addField("Chad?", "true")
      .addField("Gamer?", "true")
      */
    message.channel.send({ embeds: [embed]});
  },
};
