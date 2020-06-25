const mongoose = require("mongoose");
const Task = require("../models/taskModel");

module.exports = {
  name: "task",
  description: "List tasks add tasks etc",
  execute(message) {
    this.connectdb();
    const args = message.content.split(" ");
    if (!args[1]) this.gettasks(message);
    else this.addtask(message, args[1], args[2]);
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
  addtask(message, args, args2) {
    Task.create({ name: args, deadline: args2 });
    message.reply("Zedet el task saye !");
  },
  async gettasks(message) {
    const tasks = await Task.find();
    message.channel.send("Taks:");
    tasks.forEach((el, i) => {
      message.channel.send(
        `Task number ${i} : ${el.name} Created at : ${el.createdAt} deadline on : ${el.deadline}`
      );
    });
  },
};
