const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warn",
  description: "Warns a member",
  aliases: ["addwarn", "aw"],
  execute(message, args, client) {
    //Ignore this, just the error displayer.
    function clean(text) {
      if (typeof text === "string")
        return text
          .replace(/@/g, "" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }
    //Gets guild for member ID
    let guild = message.guild;
    //Checks if executor is actually mod.
    if (
      message.member.roles.cache.some(
        (role) => role.name === "Allows magic to happen"
      )
    ) {
      //Gets P# roles. Command can't run without it.
      let P1 = guild.roles.cache.find((r) => r.name === "P1");
      let P2 = guild.roles.cache.find((r) => r.name === "P2");
      let P3 = guild.roles.cache.find((r) => r.name === "P3");
      let P4 = guild.roles.cache.find((r) => r.name === "P4");
      let P5 = guild.roles.cache.find((r) => r.name === "P5");
      //Defines member. Switches from Mention and ID. Last one is useless.
      const member =
        message.mentions.members.first() ||
        guild.member(args[0]) ||
        guild.member(args);
      //Checks if they actually mentioned someone/user exists
      if (member) {
        try {
          //Checks if member has a P role
          let HasP1 = member.roles.cache.some((r) => r.name === "P1");
          let HasP2 = member.roles.cache.some((r) => r.name === "P2");
          let HasP3 = member.roles.cache.some((r) => r.name === "P3");
          let HasP4 = member.roles.cache.some((r) => r.name === "P4");
          let HasP5 = member.roles.cache.some((r) => r.name === "P5");
          const warnEmbed = new MessageEmbed().setColor("#ff0000").setAuthor(
            member.user.username,
            member.user.displayAvatarURL({
              format: "jpg",
              dynamic: "true",
            })
          );
          //Displays Member info in Console.
          console.log(member);
          //Defines what the case is comparing to. 
          switch (true) {
            //Checks if user has P1
            case HasP1:
              //If so, removes P1
              member.roles.remove(P1);
              //Adds P2
              member.roles.add(P2);
              //Displays confirm message.
              warnEmbed.addField(
                `${member.user.tag} had P1, assigning P2.`,
                "2nd warn"
              );
              break;
            //Checks if user has P2
            case HasP2:
              //Remove P2
              member.roles.remove(P2);
              //Adds P3, you get the idea.
              member.roles.add(P3);
              warnEmbed.addField(
                `${member.user.tag} had P2, assigning P3.`,
                "3rd warn"
              );
              break;
            //Checks if has P3
            case HasP3:
              member.roles.remove(P3);
              member.roles.add(P4);
              warnEmbed.addField(
                `${member.user.tag} had P3, assigning P4.`,
                "4th warn"
              );
              break;
            //Checks if has P4
            case HasP4:
              member.roles.remove(P4);
              member.roles.add(P5);
              warnEmbed.addField(
                `${member.user.tag} had P4, assigning P5. This is this member's last chance.`,
                "5th warn"
              );
              break;
            //Checks if has P5
            case HasP5:
              //Doesn't do much. Just reminds mods to ban.
              warnEmbed.addField(
                `${member.user.tag} should probably be banned but idk I'm just a bot.`,
                "Not gonna lie..."
              );
              break;
            //If Member doesn't have any P roles, add P1.
            default:
              member.roles.add(P1);
              warnEmbed.addField(
                `This is ${member.user.tag}'s first warn. They are now at P1.`,
                "1st warn."
              );
          }
          message.channel.send(warnEmbed);
          //Error Handler.
        } catch (error) {
          message.channel.send(
            `Aw maaaaan. I couldn't do the thing I needed to do. <@388813100964642816> should prob know about this. The technical stuff\` \`\`\`xl\n${clean(
              error
            )}\n\`\`\``
          );
          console.log(error);
        }
        //Error if user didn't mention/give ID of a user OR if user doesn't exist.
      } else if (!member) {
        console.log(member);
        message.channel.send(
          "You need to actually like put the person you want in the message, otherwise I can't do crap."
        );
      }
    } else {
      //Generates random number
      var reprtID = Math.floor(1000 + Math.random() * 9000);
      //Array of messages
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
      //Selects random message
      const random = Math.floor(Math.random() * modMessage.length);
      const randomMessage = modMessage[random];
      //Sends random message.
      message.channel.send(randomMessage);
    }
  },
};
