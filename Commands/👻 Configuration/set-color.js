const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "set-color",
    description: "Set the color of the embeds",
    run: async (client, message, args) => {
        const color = args[0]

        console.log(interaction.user.username+' use /set-color')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

        db.set(`ghostping_color_${interaction.guild.id}`, color)

    const embed = new MessageEmbed()
        .setAuthor(`Ghost Pings`, client.user.displayAvatarURL())
        .setDescription(`The color of the embeds has been set to ${color}`)
        .setColor(color)

        return message.channel.send({ embeds: [embed] })
    },
};

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved