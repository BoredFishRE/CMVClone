const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping tester",
  execute(message, args, client) {
    var ping = Math.round(client.ws.ping) + " ms";
    const emojiLoad = client.emojis.cache.get("841727733393391656");
    const checkPing = ping > "500";
    if (checkPing == true) {
      message.react("841727733393391656");
    }
    message.channel.send(`${emojiLoad}`).then((msg) => {
      setTimeout(() => {
        msg.edit(`Pong! \nPing is ${ping}`);
      }, 3000);
    });
  },
};
