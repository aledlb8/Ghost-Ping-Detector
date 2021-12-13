const client = require("../index");
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const fs = require('fs');
const config = require('../config.json');

client.on("interactionCreate", async(interaction) => {      
    // Slash Command Handling
    if (interaction.isCommand()) {
        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) return interaction.followUp({ content: "An error has occurred " });
        await interaction.deferReply({ ephemeral: true }).catch(() => {});

        const args = [];
        for (let option of interaction.options.data) {
          if (option.type === "SUB_COMMAND") {
            if (option.name) args.push(option.name);
            option.options.forEach((x) => {
              if (x.value) args.push(x.value);
            });
          } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: true });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }

    // BUTTON EVENT
    if(interaction.isButton()) {
      const wait = require('util').promisify(setTimeout);
      if (interaction.customId === '') {

    }
  }
    // MENU EVENT
    if(interaction.isSelectMenu()) {
      const value = interaction.values[0];
      interaction.deferUpdate();
      if(value === "") {

    }
  }
});

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved