const fs = require("fs");
require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const Client = require("./client/Client");
const axios = require("axios");
const { prefix, token } = require("./config.json");
// const TOKEN = "NzA3ODE0OTQyMjI0NTQ3ODQz.XrOSgA.qiserc4YuOqnIl4Xx3luaEIgHJg";
const client = new Client();
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
console.log(client.commands);
client.once("ready", (message) => {
  console.log("Ready!", message);
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

const members = [
  " Jamel Ihéb ",
  " Yasmine Harb",
  "baha eddine chammakhi",
  " Ben Taleb Amal",
  "  Dorra kchouk ",
  " Skander Galloub",
  "Aziz Khadraoui",
  "  Dhifli Mohamed",
  "  Dridi rahma",
  " LAHMAR Siwar ",
  " Maram sfar ",
  "  Rajhi Ryma",
  " rayen chamekhi ",
  "sarah bouraffa",
  "Sebteoui imen",
  " Bouakroucha Ahmed",
  "  Ben Taleb Amal",
  "  achour malek",
  "  Ahmed zoubeir ",
  "Ben Attia Sarah",
  " Cyrine labidi ",
  " Daboub wajih",
  "Farhat achraf",
  " Jelassi Med Aziz",
  " kordi may",
  " Koussay Bouchaala",
  "L'kima Rihab",
  " landoulsi ghassen",
  "Makdouli med aziz",
  " Mathlouthi sywar",
  "Mohamed khalil nakhli",
  "Robbana Fahd",
  " Sayri bahija",
  "rayen ben slimen",
  "hamza lounissi",
  "ghuerira aymen",
  "Yasmine Harb",
  "Chaima Ayadi ",
  " Malek Ben othmen ",
  "Mohamed Taieb Aloui",
  "  Salma Bahri",
  " Cyrine Ayadhi",
  "khira sghaier",
  "Sponsoring",
  "Skander Galloub",
  "  Mohamed Malek Riahi",
  " Sahli houssem eddine",
  " absi farah",
  "Ameni Hajri",
  "  ayadi med ziz",
  "Ayadi Souha",
  "Khammassi imen",
  "skander staali",
  "  hedi ben ameur ",
];

client.login(token);
client.on("message", async (message) => {
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  try {
    if (commandName == "ban" || commandName == "userinfo") {
      command.execute(message, client);
    } else {
      command.execute(message);
    }
  } catch (error) {
    console.error(error);
    message.reply("There was an error trying to execute that command!");
  }
});


  if (msg.content === "corona") {
    axios
      .get("https://coronavirus-19-api.herokuapp.com/countries/tunisia")
      .then((result) => {
        msg.reply(
          `Andna taw ${result.data.cases} Hala !! ou ${result.data.deaths} mouta donc abkaw f dar aman`
        );
      });
  }
  if (msg.content === "chkn 3malni ?") {
    msg.reply("Lem3alem Baha");
  }

  if (msg.content === "ana member ?") {
    let response = false;
    console.log(msg.author.username);
    const username = msg.author.username;
    members.forEach((el, i) => {
      if (el.toLowerCase().includes(username.toLowerCase())) {
        msg.channel.send(`Ey inty manaa`);
        response = true;
      }
    });
    if (!response) msg.channel.send(`Le mkch manaa`);
  }
  if (msg.content === "ping") {
    msg.reply("pong");
    msg.channel.send("pong");
  } else if (msg.content.startsWith("!kick")) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply("Please tag a valid user!");
    }
  }
});
