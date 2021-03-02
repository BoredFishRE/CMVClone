const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warn",
  description: "Warns a member",
  execute(message, args, client) {
    if (
      message.member.roles.cache.some((role) => role.name === "Moderation Team")
    ) {
      let P1 = message.guild.roles.cache.find((r) => r.name === "P1");
      let P2 = message.guild.roles.cache.find((r) => r.name === "P2");
      let P3 = message.guild.roles.cache.find((r) => r.name === "P3");
      let P4 = message.guild.roles.cache.find((r) => r.name === "P4");
      let P5 = message.guild.roles.cache.find((r) => r.name === "P5");
      let P6 = message.guild.roles.cache.find((r) => r.name === "P6");
      if (message.mentions.users.first().id) {
        let member = message.mentions.members.first();
        if (member.roles.cache.some((role) => role.name === "P1")) {
          member.roles.remove(P1);
          member.roles.add(P2);
          message.delete();
          message.channel.send(
            `${message.mentions.members.first()} is now at P2`
          );
        } else if (member.roles.cache.some((role) => role.name === "P2")) {
          member.roles.remove(P2);
          member.roles.add(P3);
          message.delete();
          message.channel.send(
            `${message.mentions.members.first()} is now at P3`
          );
        } else if (member.roles.cache.some((role) => role.name === "P3")) {
          member.roles.remove(P3);
          member.roles.add(P4);
          message.delete();
          message.channel.send(
            `${message.mentions.members.first()} is now at P4`
          );
        } else if (member.roles.cache.some((role) => role.name === "P4")) {
          member.roles.remove(P4);
          member.roles.add(P5);
          message.delete();
          message.channel.send(
            `${message.mentions.members.first()} is now at P5`
          );
        } else if (member.roles.cache.some((role) => role.name === "P5")) {
          member.roles.remove(P5);
          member.roles.add(P6);
          message.delete();
          message.channel.send(
            `${message.mentions.members.first()} is now at P6. This dude should probably be banned but idk I'm just a bot.`
          );
        } else if (member.roles.cache.some((role) => role.name === "P6")) {
          message.channel.send("Bruh this dude should be banned.");
        } else {
          member.roles.add(P1);
          message.delete();
          message.channel.send(
            `This is ${message.mentions.members.first()}'s first warn. They are now at P1.`
          );
        }
      } else {
        message.delete();
        message.channel.send(
          "You need to mention someone. Mention someone next time."
        );
      }
    } else {
      message.delete();
      message.channel.send("You ain't no mod. Get outta here man.");
    }
  },
};
