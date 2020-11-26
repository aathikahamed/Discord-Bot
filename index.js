const axios = require("axios");
const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", (msg) => {
  if (msg.channel.id === "781604557985284196" && msg.content[0] === "!") {
    axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
      console.log(response, response.cases);
      msg.channel.send("Cases " + response.cases);
    });
  }
});
