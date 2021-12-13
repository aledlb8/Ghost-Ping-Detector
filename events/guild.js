const client = require("../index");; 
const config = require("../config.json");
    client.on("guildCreate", async (client, guild) => {
        console.log(`I joined a new server`);
    })
    client.on("guildDelete", () => {
        console.log(`I leave a server`)
    })

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved