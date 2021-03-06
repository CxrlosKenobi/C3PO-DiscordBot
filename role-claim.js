const Discord = require('discord.js')
const firstMessage = require('./first-message')

module.exports = (client) => {
    const channelId = '871778181265367072'

    const getEmoji = (emojiName) => 
        client.emojis.cache.find((emoji) => emoji.name === emojiName)

    const emojis = {
        robotMicrosoft: 'Robot!',
    }

    const reactions = []
    
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)
        
        const role = emojis[key]
        // emojiText += `${emoji} = ${role}\n`
    }
    
    let emojiText = 'Oh! Mis circuitos se alegran de verte aquí.\nSoy C-3PO. Un androide de protocolo, diseñado para el servicio de los humanos.\n\nPara cualquier duda o inquietud el rol de **staff** pertenece a la directiva de RAS, quienes estarán ansiosos por ayudarte.\n\nReacciona al mensaje para comenzar ✅'

    firstMessage(client, channelId, emojiText, reactions)
    
    const handleReaction = (reaction, user, add) => {
        if (user.id === '871849675488108595'){
            return
        }

        const emoji = reaction._emoji.name
        const { guild } = reaction.message
        const roleName = 'Miembrx'

        if (!roleName){
            return
        }

        const role = guild.roles.cache.find((role) => role.name === roleName)
        const member = guild.members.cache.find((member) => member.id === user.id)
        
        if (add){
            member.roles.add(role)
        } else {
            member.roles.remove(role)
        }
    }

    client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction(reaction, user, true)
            console.log(`Reaction ${reaction.emoji.name} added by ${user.username}`)
        }
    })

    client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction(reaction, user, false)
            console.log(`Reaction ${reaction.emoji.name} removed by ${user.username}`)
        }
    })
}
