const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const client = require('../index.js');

// when someone delete a message logs it
client.on('messageDelete', async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (message.content.includes('@')) {
        let color = db.get(`ghostping_color_${message.guild.id}`) || "RED";
        let channel = await db.get(`ghostping_channel_${message.guild.id}`)
        if (channel) {
            const embed = new MessageEmbed()
            .setTitle('Ghostping')
            .setDescription(`${message.author.username} has deleted his message & he ghost pinged ${message.content}`)
            .setColor(color)
            message.guild.channels.cache.get(channel).send({ embeds: [embed] });
        } else {
            return;
        }
    }
});


// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved