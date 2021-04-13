const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "about",
  description: "About the Bot",
  aliases: ["cmvabout"],
  execute(message, args, client) {
    //embed go brrrrr
    let embed = new MessageEmbed()
      .setColor("#42f2f5")
      .setThumbnail("https://cdn.discordapp.com/avatars/815999410327781396/7f71df8e2269680681d08e86f8c9279b.png?size=128")
      .setFooter("CMV Clone was developed by BoredFish https://boredfish.dev", "https://cdn.discordapp.com/avatars/388813100964642816/a_f3f3f72adfde2334d6c1d2a36267a6a1.gif?size=128")
      .addField("Bot Version", "1.2.1")
      .addField("Chad?", "true")
      .addField("Gamer?", "true")
    message.channel.send(embed);
  },
};
