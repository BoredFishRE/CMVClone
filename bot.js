const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { prefix } = require("./config.json");
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

client.once("ready", () => {
  client.user.setActivity(client.guilds.cache.size + " servers", {
    type: "WATCHING",
  });
  console.log("My Body is ready.");
});
client.on("guildCreate", () => {
  // Fired every time the bot is added to a new server
  client.user.setActivity(client.guilds.cache.size + " servers", {
    type: "WATCHING",
  });
});

client.on("guildDelete", () => {
  // Fired every time the bot is removed from a server
  client.user.setActivity(client.guilds.cache.size + " servers", {
    type: "WATCHING",
  });
});
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

client.on("message", (message) => {
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/@/g, "" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
  if (!message.content.startsWith(prefix) || message.channel.type == "dm")
    return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  try {
    command.execute(message, args, client);
  } catch (error) {
    console.log(error);
    message.channel.send(
      `Aw maaaaan. I couldn't do the thing I needed to do. <@388813100964642816> should prob know about this. The technical stuff\` \`\`\`xl\n${clean(
        error
      )}\n\`\`\``
    );
  }
});

client.login(config.token);
