const { glob } = require("glob");
const { promisify } = require("util");
const chalk = import("chalk");
const globPromise = promisify(glob);
const { MessageEmbed } = require("discord.js")
const fs = require("fs")
const config = require('../config.json')

const client = require("../index.js")

module.exports = async (client) => {
  const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
  commandFiles.map((value) => {
    const file = require(value);
    const splitted = value.split("/");
    const directory = splitted[splitted.length - 2];

    if (file.name) {
      const properties = { directory, ...file };
      client.commands.set(file.name, properties);
    }
  });

  const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
  eventFiles.map((value) => require(value));

  const slashCommands = await globPromise(`${process.cwd()}/SlashCommands/*/*.js`);
  const arrayOfSlashCommands = [];
  slashCommands.map((value) => {
    const file = require(value);
    if (!file?.name) return;
    client.slashCommands.set(file.name, file);
    arrayOfSlashCommands.push(file);
  });

  client.on("messageCreate", async (message, args) => {
    if(message.content.startsWith(`${config.prefix}load`)) {
      if(!message.member.permissions.has("ADMINISTRATOR")) return;
      const embed = new MessageEmbed()
      .setTitle(`Interactions for ${message.guild.name}`)
      .setDescription(`SlashCommands/ContextMenus are being loaded for ${message.guild.name} please wait around 30 minutes for them to register`)
      .setColor(`#0x2F3136`)
      .setFooter(`Action by ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
      await client.application.commands.set(arrayOfSlashCommands).then(
        message.channel.send({ embeds: [embed] })
      ).then(
        message.react("✅")
        )
    }
  })
};

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved
