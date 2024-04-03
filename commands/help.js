const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "List all of my commands or info about a specific command.",
  aliases: ["commands"],
  execute(message, args) {
    let checkArgs = args == "moderation";
    switch (checkArgs) {
      case true:
        const helpEmbed = new EmbedBuilder()
          .setColor("#ff0000")
          .setTitle("Moderation Commands")
          .addFields([
            { name: "ban", value: "Sends haha funny on ban. \n Usage: *ban [mention/ID] [reason]", inline: true },
            //{ name: "embedBan", value: "Embed bans a member. \n Usage: *embedban [mention/ID]", inline: true },
            //{ name: "kick", value: "Kicks a member. \n Usage: *kick [mention/ID]", inline: true },
            { name: "mute", value: "Increments P role to P3, or P4/P5 if member already has P3/P4. \n Usage: *mute [mention/ID] [Reason]", inline: true },
            //{ name: "mutes", value: "Lists mutes for a member. \n Usage: *mutes [mention/ID]", inline: true },
            //{ name: "purge", value: "Purges X amount of messages that are less than 14 days old. \n Usage: *purge [amount of messages]", inline: true },
            { name: "revokemute", value: "Removes a mute's P role \n Usage: *revokemute [mention/ID]", inline: true },
            { name: "revokewarn", value: "Removes 1 P role \n Usage: *removewarn [mention/ID]", inline: true },
            //{ name: "unlock", value: "Unlocks a locked channel. \n Usage: *unlock", inline: true },
            { name: "warn", value: "Incriments up one P role. \n Usage: *warn [mention/ID] [reason]", inline: true },
            //{ name: "warnings", value: "Lists warnings for a member. \n Usage: *warnings [mention/ID]", inline: true },
          ])
          /*
          .addFields(
            "ban",
            "Bans a member. \n Usage: *ban [mention/ID] [reason]",
            true
          )
          .addFields(
            "embedBan",
            "Embed bans a member. \n Usage: *embedban [mention/ID]",
            true
          )
          .addFields(
            "kick",
            "Kicks a member. \n Usage: *kick [mention/ID]",
            true
          )
          .addFields("lock", "Locks a channel. \n Usage: *lock", true)
          .addFields(
            "mute",
            "Mutes a member. \n Usage: *mute [mention/ID] [Reason]",
            true
          )
          .addFields(
            "mutes",
            "Lists mutes for a member. \n Usage: *mutes [mention/ID]",
            true
          )
          .addFields(
            "purge",
            "Purges X amount of messages that are less than 14 days old. \n Usage: *purge [amount of messages]",
            true
          )
          .addFields(
            "revokePRole",
            "Incriments P role down one. \n Usage: *revokePRole [mention/ID]",
            true
          )
          .addFields(
            "removewarn",
            "Removes a saved warning. \n Usage: *removewarn [ReportID]",
            true
          )
          .addFields(
            "unlock",
            "Unlocks a locked channel. \n Usage: *unlock",
            true
          )
          .addFields(
            "warn",
            "Warns a member while incrimenting up one P role. \n Usage: *warn [mention/ID] [reason]",
            true
          )
          .addFields(
            "warnings",
            "Lists warnings for a member. \n Usage: *warnings [mention/ID]",
            true
          )
          */
          .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ format: "gif", dynamic: "true" })})
          message.channel.send({ embeds: [helpEmbed] });
        break;
      default:
        const helpEmbed1st = new EmbedBuilder()
          .setColor("#ff0000")
          .addFields([
            { name: "about", value: "About the bot.", inline: true },
            { name: "hack", value: ";)", inline: true },
            { name: "help", value: "This command! \n Usage: *help", inline: true },
            { name: "Serverinfo", value: "Lists info about server. \n Usage: *serverinfo", inline: true },
            { name: "Userinfo", value: "Shows info about a user \n Usage: *userinfo [mention/ID]", inline: true },
            { name: "For moderation commands do *help moderation", value: "Ex: *help moderation", inline: false },
          ])
          /*.addFields("about", "About the bot.", true)
          .addFields("hack", ";)", true)
          .addFields("help", "This command! \n Usage: *help", true)
          .addFields("Serverinfo", "Lists info about server. \n Usage: b*serverinfo", true)
          .addFields("Userinfo", "Shows info about a user. \n Usage: b*userinfo [mention/ID]", true)
          .addFields(
            "For moderation commands do *help moderation",
            "Ex: *help moderation"
          )
          */
         .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ format: "gif", dynamic: "true" })})
         /*
          .setFooter(
            `Requested by ${message.author.username}`,
            message.author.displayAvatarURL({ format: "gif", dynamic: "true" })
          );
        */
        message.channel.send({ embeds: [helpEmbed1st] });
    }
  },
};