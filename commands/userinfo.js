const {
  EmbedBuilder
} = require("discord.js");

module.exports = {
  name: "userinfo",
  description: "Info about the user.",
  execute(message, args, client) {
    const taggedUser =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (taggedUser) {
      let embed = new EmbedBuilder()
        .setColor("#ff0000")
        .setThumbnail(
          taggedUser.user.displayAvatarURL({
            format: "jpg",
            dynamic: "true"
          })
        )
        .setTitle("Userinfo of " + taggedUser.user.username)
        .setFooter({
          text: `Requested by ${message.author.username}`,
          iconURL: message.author.displayAvatarURL({
            format: "gif",
            dynamic: "true"
          })
        })
        .addFields([{
            name: "User created at?",
            value: `${taggedUser.user.createdAt}`,
            inline: true
          },
          {
            name: "User Tag",
            value: `${taggedUser.user.tag}`,
            inline: true
          },
          {
            name: "User @",
            value: `<@${taggedUser.id}>`,
            inline: true
          },
          {
            name: "User Last message sent",
            value: `${taggedUser.user.lastMessage}`,
            inline: true
          },
          {
            name: "User ID",
            value: `${taggedUser.user.id}`,
            inline: true
          },
          {
            name: "User is Bot?",
            value: `${taggedUser.user.bot}`,
            inline: true
          },
          {
            name: "User Joined at",
            value: `${taggedUser.user.joinedAt}`,
            inline: true
          },
        ])
      /*
      .addField("User created at?", taggedUser.user.createdAt, true)
      .addField("User Tag", taggedUser.user.tag, true)
      .addField("User @", `<@${taggedUser.id}>`, true)
      .addField("User's Last message sent", taggedUser.user.lastMessage, true)
      .addField("User ID", taggedUser.id, true)
      .addField("User is Bot?", taggedUser.user.bot, true)
      .addField("User joined at?", taggedUser.joinedAt, true);
      */
      message.channel.send({
        embeds: [embed]
      });
    } else if (!message.mentions.users.size) {
      message.channel.send(
        "User did not mention user or user mentioned does not exist. Sending user info of message author..."
      );
      let embed = new EmbedBuilder()
        .setColor("#ff0000")
        .setThumbnail(
          message.author.displayAvatarURL({
            format: "png",
            dynamic: "true"
          })
        )
        .setTitle("Userinfo of " + message.author.username)
        .setFooter({
          text: `Requested by ${message.author.username}`,
          iconURL: message.author.displayAvatarURL({
            format: "gif",
            dynamic: "true"
          })
        })
        .addFields([{
            name: "User created at?",
            value: `${message.author.createdAt}`,
            inline: true
          },
          {
            name: "User Tag",
            value: `${message.author.tag}`,
            inline: true
          },
          {
            name: "User @",
            value: `<@${message.author.id}>`,
            inline: true
          },
          {
            name: "User Last message sent",
            value: `${message.author.lastMessage}`,
            inline: true
          },
          {
            name: "User ID",
            value: `${message.author.id}`,
            inline: true
          },
          {
            name: "User is Bot?",
            value: `${message.author.bot}`,
            inline: true
          },
          {
            name: "User Joined at",
            value: `${message.author.joinedAt}`,
            inline: true
          },
        ])
      /*
              .addField("User created at?", message.author.createdAt, true)
              .addField("User Tag", message.author.tag, true)
              .addField("User @", `<@${message.author.id}>`, true)
              .addField("User's Last message sent", message.author.lastMessage, true)
              .addField("User ID", message.author.id, true)
              .addField("User is Bot?", message.author.bot, true)
              .addField("User joined at?", message.member.joinedAt, true);
      */
      message.channel.send({
        embeds: [embed]
      });
    }
  },
};