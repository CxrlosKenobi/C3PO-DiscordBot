module.exports = (client) => {
    const channelId = '871778181265367073' // Welcome channel 
    const targetChannelId = '871778181265367072' // Rules channel 
    
    client.on('guildMemberAdd', (member) => {
        const message = `Welcome to the server, <@${member.user.username}>!\n Please checkout ${member.guild.channels.cache.get(targetChannelId).toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
