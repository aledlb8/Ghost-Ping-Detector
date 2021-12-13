const client = require("../index");
const chalk = import("chalk");
const figlet = require("figlet"); 
const config = require("../config.json");
client.on("ready", () => {
  console.log(`Ghost Pings Detector is now ready`)
  client.user.setActivity({ type: config.status.type, name: config.status.text})
})

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved