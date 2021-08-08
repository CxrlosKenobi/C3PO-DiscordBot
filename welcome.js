module.exports = (client) => {
    const channelId = '871778181265367073' // Welcome channel ID
    const targetChannelId = '871778181265367072' // Target channel ID
    
    client.on('guildMemberAdd', (member) => {
        const message = `Welcome to the server, <@${member.user.username}>!\n Please checkout ${member.guild.channels.cache.get(targetChannelId).toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
<<<<<<< HEAD
}
=======
}
>>>>>>> f7d57d4f79b5a84419d27e76b3b2ac40fb012cf4
