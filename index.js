const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", (msg) => {
  if (msg.channel.id === "781600324917788723" && msg.content === "ping") {
    msg.channel.send("😎😂🤯");
  }
});
