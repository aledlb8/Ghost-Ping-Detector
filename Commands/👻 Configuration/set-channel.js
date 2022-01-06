const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "set-channel",
    description: "Set the channel where the bot will send the ghost pings information",
    run: async (client, message, args) => {
        const channel = args[0]

        console.log(interaction.user.username+' use /set-channel')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

        db.set(`ghostping_channel_${interaction.guild.id}`, channel.id)
        
        let color = db.get(`ghostping_color_${interaction.guild.id}`) || "RANDOM";

    const embed = new MessageEmbed()
        .setAuthor(`Ghost Pings`, client.user.displayAvatarURL())
        .setDescription(`The channel were all the information will be sent is now set to <#${channel.id}>`)
        .setColor(color)

        return message.channel.send({ embeds: [embed] })
    },
};

// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved