const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warn",
  description: "Warns a member",
  execute(message, args, client) {
    if (
      message.member.roles.cache.some((role) => role.name === "Moderation team")
    ) {
      let P1 = message.guild.roles.cache.find((r) => r.name === "P1");
      let P2 = message.guild.roles.cache.find((r) => r.name === "P2");
      let P3 = message.guild.roles.cache.find((r) => r.name === "P3");
      let P4 = message.guild.roles.cache.find((r) => r.name === "P4");
      let P5 = message.guild.roles.cache.find((r) => r.name === "P5");
      if (message.mentions.users.first().id) {
        let member = message.mentions.members.first();
        if (member.roles.cache.some((role) => role.name === "P1")) {
          member.roles.remove(P1);
          member.roles.add(P2);
          message.channel.send(
            `${message.mentions.members.first()} had P1, assigning P2.`
          );
        } else if (member.roles.cache.some((role) => role.name === "P2")) {
          member.roles.remove(P2);
          member.roles.add(P3);
          message.channel.send(
            `${message.mentions.members.first()} had P2, assigning P3.`
          );
        } else if (member.roles.cache.some((role) => role.name === "P3")) {
          member.roles.remove(P3);
          member.roles.add(P4);
          message.channel.send(
            `${message.mentions.members.first()} had P3, assigning P4.`
          );
        } else if (member.roles.cache.some((role) => role.name === "P4")) {
          member.roles.remove(P4);
          member.roles.add(P5);
          message.channel.send(
            `${message.mentions.members.first()} had P4, assigning P5. This is this user's last chance.`
          );
        } else if (member.roles.cache.some((role) => role.name === "P5")) {
          message.channel.send(
            `${message.mentions.members.first()} should probably be banned but idk I'm just a bot.`
          );
        } else {
          member.roles.add(P1);
          message.channel.send(
            `This is ${message.mentions.members.first()}'s first warn. They are now at P1.`
          );
        }
      } else {
        message.channel.send(
          "You need to mention someone. Mention someone next time."
        );
      }
    } else {
      message.channel.send("You ain't no mod. Get outta here man.");
    }
  },
};
