const { Client, Collection } = require("discord.js");
const config = require('./config.json')

const client = new Client({
  ws: {
        properties: {
            $browser: "Discord iOS" // or "Discord Android", doesn't matter lol
        },
    },
  intents: 32767,
});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
let prefix = client.config.prefix

require("./handler")(client);
client.login(config.token);

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved