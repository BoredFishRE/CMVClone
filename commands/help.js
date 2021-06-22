const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "List all of my commands or info about a specific command.",
  aliases: ["commands"],
  execute(message, args) {
    let checkArgs = args == "moderation";
    switch (checkArgs) {
      case true:
        const helpEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setTitle("Moderation Commands")
          .addField(
            "ban",
            "Bans a member. \n Usage: *ban [mention/ID] [reason]",
            true
          )
          /*
          .addField(
            "embedBan",
            "Embed bans a member. \n Usage: *embedban [mention/ID]",
            true
          )
          */
          .addField(
            "mute",
            "Mutes a member. \n Usage: *mute [mention/ID] [Reason]",
            true
          )
          .addField(
            "revokemute",
            "Incriments P role down three. \n Usage: *revokemute [mention/ID]",
            true
          )
          .addField(
            "removewarn",
            "Incriments P role down once. \n Usage: *removewarn [mention/ID]",
            true
          )
          .addField(
            "warn",
            "Warns a member while incrimenting up one P role. \n Usage: *warn [mention/ID] [reason]",
            true
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.displayAvatarURL({ format: "gif", dynamic: "true" })
          );
        message.channel.send(helpEmbed);
        break;
      default:
        const helpEmbed1st = new MessageEmbed()
          .setColor("#ff0000")
          .addField("about", "About the bot.", true)
          .addField("hack", ";)", true)
          .addField("help", "This command! \n Usage: *help", true)
          .addField("Serverinfo", "Lists info about server. \n Usage: b*serverinfo", true)
          .addField("Userinfo", "Shows info about a user. \n Usage: b*userinfo [mention/ID]", true)
          .addField(
            "For moderation commands do *help moderation",
            "Ex: *help moderation"
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.displayAvatarURL({ format: "gif", dynamic: "true" })
          );
        message.channel.send(helpEmbed1st);
    }
  },
};
