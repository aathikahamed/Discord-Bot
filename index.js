const axios = require("axios");
const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const exampleEmbed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Some title")
  .setURL("https://discord.js.org/")
  .setAuthor(
    "Some name",
    "https://i.imgur.com/wSTFkRM.png",
    "https://discord.js.org"
  )
  .setDescription("Some description here")
  .setThumbnail("https://i.imgur.com/wSTFkRM.png")
  .addFields(
    { name: "Regular field title", value: "Some value here" },
    { name: "\u200B", value: "\u200B" },
    { name: "Inline field title", value: "Some value here", inline: true },
    { name: "Inline field title", value: "Some value here", inline: true }
  )
  .addField("Inline field title", "Some value here", true)
  .setImage("https://i.imgur.com/wSTFkRM.png")
  .setTimestamp()
  .setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png");

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", (msg) => {
  if (msg.channel.id === "781604557985284196" && msg.content[0] === "!") {
    switch (msg.content) {
      case "!help commands":
        msg.channel.send(exampleEmbed);
        break;
      case "!covid":
        axios
          .get("https://disease.sh/v3/covid-19/all")
          .then((response) => {
            let message = new Discord.MessageEmbed()
              .setColor("#0099ff")
              .setTitle(`Covid Cases Today WorldWide is ${response.data.cases}`)
              .setURL("https://discord.js.org/")
              .setDescription("Covid-19 Details in the World")
              .setThumbnail(
                "https://cdn.iconscout.com/icon/free/png-256/globe-showing-americas-eart-33894.png"
              )
              .addFields(
                { name: "Regular field title", value: "Some value here" },
                { name: "\u200B", value: "\u200B" },
                {
                  name: "Inline field title",
                  value: "Some value here",
                  inline: true,
                },
                {
                  name: "Inline field title",
                  value: "Some value here",
                  inline: true,
                }
              )
              .addField("Inline field title", "Some value here", true)
              .setImage(
                "https://cdn.iconscout.com/icon/free/png-256/globe-showing-americas-eart-33894.png"
              )
              .setTimestamp()
              .setFooter(
                "Some footer text here",
                "https://i.imgur.com/wSTFkRM.png"
              );

            msg.channel.send(message);
          })
          .catch((error) => {
            console.log(error);
          });
        break;
    }
  }
});
