const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')

module.exports = {
    name: "help",
    description: "Get some help",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {

    console.log(interaction.user.username+' use /help')

    const embed = new MessageEmbed()
        .setAuthor(`Ghost Ping Detector`, client.user.displayAvatarURL())
        .setDescription('`/set-channel` -> Set the channel where the bot will send the ghost pings information\n`set-color` -> Set the color of the embeds')
        .setColor(`#0x2F3136`)

        return interaction.followUp({ embeds: [embed] })
    },
};

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved