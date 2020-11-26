const axios = require("axios");
const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", (msg) => {
  if (msg.channel.id === "781600324917788723" && msg.content[0] === "!") {
    axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
      msg.channel.send(response.cases);
    });
  }
});
