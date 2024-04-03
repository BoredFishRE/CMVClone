const {
  EmbedBuilder
} = require("discord.js");

module.exports = {
  name: "serverinfo",
  description: "info about server",
  execute(message, args, client) {
    const guild = client.guilds.cache.get(message.guild.id);
    const owner = message.guild.fetchOwner();
    let embed = new EmbedBuilder()
      .setColor("#ff0000")
      .setThumbnail(guild.iconURL({
        format: "jpg",
        dynamic: "true"
      }))
      .setFooter({
        text: `Requested by ${message.author.username}`,
        iconURL: message.author.displayAvatarURL({
          format: "gif",
          dynamic: "true"
        })
      })
      .addFields([{
        name: "Server Name",
        value: `${guild.name}`,
        inline: true
      }, {
        name: "Server Owner",
        value: `${owner}`,
        inline: true
      }, {
        name: "Server Created?",
        value: `${guild.createdAt}`,
        inline: true
      }, {
        name: "Member Count",
        value: `${guild.memberCount}`,
        inline: true
      }, {
        name: "Server ID",
        value: `${guild.id}`,
        inline: true
      }, {
        name: "Server Partnered?",
        value: `${guild.partnered}`,
        inline: true
      }, {
        name: "Boost Count",
        value: `${guild.premiumSubscriptionCount}`,
        inline: true
      }, {
        name: "Boost Level",
        value: `${guild.premiumTier}`,
        inline: true
      }, {
        name: "Server Region",
        value: `${guild.region}`,
        inline: true
      }, {
        name: "Server Verified?",
        value: `${guild.verified}`,
        inline: true
      }, ])
    /*
    .addField("Server Name", guild.name, true)
    .addField("Server Owner", guild.owner, true)
    .addField("Server Created?", guild.createdAt, true)
    .addField("Member Count", guild.memberCount, true)
    .addField("Server ID", guild.id, true)
    .addField("Partnered?", guild.partnered, true)
    .addField("Boost Count", guild.premiumSubscriptionCount, true)
    .addField("Boost Level", guild.premiumTier, true)
    .addField("Server Region", guild.region, true)
    .addField("Server Verified?", guild.verified, true);
    */
    message.channel.send({
      embeds: [embed]
    });
  },
};