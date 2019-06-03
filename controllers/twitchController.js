const tmi = require("tmi.js");
const helpers = require("../helpers");
require("dotenv").config();

//////////////////Twitch Connection Options////////////////////
const options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "lubechatbot",
    password: process.env.TTV_OAUTH
  },
  channels: ["Lubesy"]
};

const client = new tmi.client(options);

//////////////////Connection Actions////////////////////
client.connect();

//Connecting
client.on("connecting", (address, port) => {
  console.log("Attempting to connect to Twitch: " + address + ":" + port);
});

//Connected
client.on("connected", (address, port) => {
  console.log("Connected to Twitch: " + address + ":" + port);
});

//Disconnected
client.on("disconnected", reason => {
  console.log(
    `Disconnected\n
  ----------------\n` + reason
  );
});

//Reconnect
client.on("reconnect", () => {
  console.log("Reconnected to Twitch");
});

//Serverchange
client.on("serverchange", channel => {
  console.log("Server has switched: " + helpers.removeHash(channel));
});

module.exports = { client: client };
