const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "set-color",
    description: "Set the color of the embeds",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'color',
            description: 'What color should the embeds have?',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: "Random",
                    value: "RANDOM"
                },
                {
                    name: "Red",
                    value: "RED"
                },
                {
                    name: "Aqua",
                    value: "AQUA"
                },
                {
                    name: "Dark Aqua",
                    value: "DARK_AQUA"
                },
                {
                    name: "Green",
                    value: "GREEN"
                },
                {
                    name: "Dark Green",
                    value: "DARK_GREEN"
                },
                {
                    name: "Blue",
                    value: "BLUE"
                },
                {
                    name: "Dark Blue",
                    value: "DARK_BLUE"
                },
                {
                    name: "Purple",
                    value: "PURPLE"
                },
                {
                    name: "Dark Purple",
                    value: "DARK_PURPLE"
                },
                {
                    name: "Luminous Vivid Pink",
                    value: "LUMINOUS_VIVID_PINK"
                },
                {
                    name: "Dark Vivid Pink",
                    value: "DARK_VIVID_PINK"
                },
                {
                    name: "Gold",
                    value: "GOLD"
                },
                {
                    name: "Dark Gold",
                    value: "DARK_GOLD"
                },
                {
                    name: "Orange",
                    value: "ORANGE"
                },
                {
                    name: "Dark Orange",
                    value: "DARK_ORANGE"
                },
                {
                    name: "Dark Red",
                    value: "DARK_RED"
                },
                {
                    name: "Grey",
                    value: "GREY"
                },
                {
                    name: "Dark Grey",
                    value: "DARK_GREY"
                },
                {
                    name: "Darker Grey",
                    value: "DARKER_GREY"
                },
                {
                    name: "Light Grey",
                    value: "LIGHT_GREY"
                },
                {
                    name: "Navy",
                    value: "NAVY"
                },
                {
                    name: "Dark Navy",
                    value: "DARK_NAVY"
                },
                {
                    name: "Yellow",
                    value: "YELLOW"
                },
                {
                    name: "White",
                    value: "WHITE"
                }
            ]
        }
    ],
    run: async (client, interaction, args) => {
        const color = interaction.options.getString("color");

        console.log(interaction.user.username+' use /set-color')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

        db.set(`ghostping_color_${interaction.guild.id}`, color)

    const embed = new MessageEmbed()
        .setAuthor(`Ghost Pings`, client.user.displayAvatarURL())
        .setDescription(`The color of the embeds has been set to ${color}`)
        .setColor(color)

        return interaction.followUp({ embeds: [embed] })
    },
};

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved