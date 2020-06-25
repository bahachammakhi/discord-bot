const mongoose = require("mongoose");
const Vote = require("../models/voteModel");

module.exports = {
  name: "vote",
  description:
    "Make a vote that takes 2 options : !mvote name option1 option2  after making the vote use !mvote name option to vote on it ! to show use (!mvote show name) ",
  execute(message) {
    const args = message.content.split(" ");
    this.connectdb();
    if (args[1] === "delete") {
      return this.deletevote(message, args[1], args[2]);
    }
    if (args[1] === "show") return this.showresults(message, args[1], args[2]);
    if (args[1] && args[2] && args[3]) {
      return this.addVote(message, args[1], args[2], args[3]);
    } else {
      console.log("args[2]", args[2]);
      return this.vote(message, args[1], args[2]);
    }
  },
  connectdb() {
    mongoose
      .connect("mongodb://localhost:27017/discordbot", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log("DB connection succesful! "));
  },
  addVote(message, args, args2, args3) {
    Vote.create({ name: args, option1: args2, option2: args3 });
    message.reply("Aya votiw ektbo (!mvote name option)");
  },
  async vote(message, args, option) {
    if (!args) return message.reply(`Hot el option ! `);
    const result = await Vote.findOne({ name: args });
    if (result.length < 1) return message.reply(`Mfmch lvote hatha ! `);
    if (result.option1 === option) {
      console.log("option1", result.option1, option);
      const newcount = parseInt(result.count1) + 1;
      const change = await Vote.findByIdAndUpdate(result._id, {
        count1: newcount.toString(),
      });
      console.log(change);
      message.reply(`Hak votit l ${option}`);
    } else if (result.option2 === option) {
      console.log("option1", result.option1, option);
      const newcount = parseInt(result.count2) + 1;
      const change = await Vote.findByIdAndUpdate(result._id, {
        count2: newcount.toString(),
      });
      console.log(change);
      message.reply(`Hak votit l ${option}`);
    } else {
      console.log("none");
    }
  },
  async deletevote(message, args, args1) {
    if (args !== "delete") return;
    const deleted = await Vote.findOneAndDelete({ name: args1 });
    if (!deleted) return message.reply(`Error try again`);
    message.reply(`${args1} Deleted`);
  },
  async showresults(message, args, args1) {
    if (args !== "show") return;
    const result = await Vote.findOne({ name: args1 });
    console.log("result", result);
    if (!result) return message.reply(`Error try again`);
    message.reply(
      `Name: ${result.name},${result.option1}:${result.count1},${result.option2}:${result.count2}`
    );
  },
};
