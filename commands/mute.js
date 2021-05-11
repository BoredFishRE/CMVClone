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
      //This really works the same way as warn.js. If you wanna find out how it works, go to warn.js.
      let P1 = message.guild.roles.cache.find((r) => r.name === "P1");
      let P2 = message.guild.roles.cache.find((r) => r.name === "P2");
      let P3 = message.guild.roles.cache.find((r) => r.name === "P3");
      let P4 = message.guild.roles.cache.find((r) => r.name === "P4");
      let P5 = message.guild.roles.cache.find((r) => r.name === "P5");
      const member =
        message.mentions.members.first() ||
        guild.member(args[0]) ||
        guild.member(args);
      if (member) {
        try {
          let HasP1 = member.roles.cache.some((r) => r.name === "P1");
          let HasP2 = member.roles.cache.some((r) => r.name === "P2");
          let HasP3 = member.roles.cache.some((r) => r.name === "P3");
          let HasP4 = member.roles.cache.some((r) => r.name === "P4");
          let HasP5 = member.roles.cache.some((r) => r.name === "P5");
          const muteEmbed = new MessageEmbed().setColor("#ff0000").setAuthor(
            member.user.username,
            member.user.displayAvatarURL({
              format: "jpg",
              dynamic: "true",
            })
          );
          console.log(member);
          switch (true) {
            case HasP1:
              member.roles.remove(P1);
              member.roles.add(P3);
              muteEmbed.addField(
                `${member.user.tag} now has P3.`,
                "Removed P1."
              );
              break;
            case HasP2:
              member.roles.remove(P2);
              member.roles.add(P3);
              muteEmbed.addField(
                `${member.user.tag} now has P3.`,
                "P2 removed."
              );
              break;
            case HasP3:
              member.roles.remove(P3);
              member.roles.add(P4);
              muteEmbed.addField(
                `${member.user.tag} had P3`,
                "Assigning P4."
              );
              break;
            case HasP4:
              muteEmbed.addField(
                `${member.user.tag} has P4.`,
                "No action was taken."
              );
              break;
            case HasP5:
              muteEmbed.addField(
                `${member.user.tag} has P5.`,
                `No action was taken.`
              );
              break;
            default:
              member.roles.add(P3);
              muteEmbed.addField(
                `${member.user.tag} now has P3.`,
                "First mute as far as I know."
              );
          }
          message.channel.send(muteEmbed)
        } catch (error) {
          message.channel.send(
            `Aw maaaaan. I couldn't do the thing I needed to do. <@388813100964642816> should prob know about this. The technical stuff\` \`\`\`xl\n${clean(
              error
            )}\n\`\`\``
          );
          console.log(error);
        }
      } else if (!member) {
        console.log(member);
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
