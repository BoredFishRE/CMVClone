const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mutes a member",
  aliases: ["addmute", "am"],
  execute(message, args, client) {
    function clean(text) {
      if (typeof text === "string")
        return text
          .replace(/@/g, "" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }
    let guild = message.guild;
    if (
      message.member.roles.cache.some(
        (role) => role.name === "Allows magic to happen"
      )
    ) {
      let P1 = message.guild.roles.cache.find((r) => r.name === "P1");
      let P2 = message.guild.roles.cache.find((r) => r.name === "P2");
      let P3 = message.guild.roles.cache.find((r) => r.name === "P3");
      let P4 = message.guild.roles.cache.find((r) => r.name === "P4");
      let P5 = message.guild.roles.cache.find((r) => r.name === "P5");
      const member = message.mentions.members.first() || guild.member(args[0]) || guild.member(args)
      if (member) {
        try {
          if (member.roles.cache.some((r) => r.name === "P3")) {
            member.roles.remove(P3);
            member.roles.add(P4);
            message.channel.send(
              `${member} had P3, assigning P4.`
            );
          } else if (member.roles.cache.some((r) => r.name === "P1")) {
            member.roles.remove(P1);
            member.roles.add(P3);
            message.channel.send(
              `${member} now has P3.`
            );
          } else if (member.roles.cache.some((r) => r.name === "P2")) {
            member.roles.remove(P2);
            member.roles.add(P3);
            message.channel.send(
              `${member} now has P3.`
            );
          } else if (
            member.roles.cache.some((r) => r.name === "P4") ||
            member.roles.cache.some((r) => r.name === "P5")
          ) {
            message.channel.send(
              `${member} either has P4 or P5. No action was taken.`
            );
          } else {
            member.roles.add(P3);
            message.channel.send(
              `${member} now has P3.`
            );
          }
        } catch (error) {
          message.channel.send(
            `Aw maaaaan. I couldn't do the thing I needed to do. <@388813100964642816> should prob know about this. The technical stuff\` \`\`\`xl\n${clean(
              error
            )}\n\`\`\``
          );
          console.log(error);
        }
      } else if (!member) {
        console.log(member)
        message.channel.send(
          "You need to actually like put the person you want in the message, otherwise I can't do crap."
        );
      }
    } else {
      var reprtID = Math.floor(1000 + Math.random() * 9000);
      const modMessage = [
        "You ain't no mod. Get outta here man.",
        "Well, this is awkward. So, you're not a mod, but you're trying to do mod stuff, but you can't do that, so I can't do my thing... Welp. Time to sit in the void until someone calls for me again.",
        "Bro, what are you doing? You aren't a mod man! Why are you trying it?",
        "You're' getting cancelled for doing that",
        "What are you doing stepbro?",
        "Why are you running? You ain't no mod, so don't try it again!",
        `This unauthorised usage of mod commands has been reported to feiks with ReportID #${reprtID}`,
        "Leave me alone man, I can't do that.",
        "a",
        "Do not cite the deep magic to me witch, I was there when it was written.",
      ];
      const random = Math.floor(Math.random() * modMessage.length);
      const randomMessage = modMessage[random];
      message.channel.send(randomMessage);
    }
  },
};
