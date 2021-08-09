const Discord = require('discord.js')
const config = require('./config.json')
const roleClaim = require('./role-claim')
const welcome = require('./welcome')
const loadCommands = require('./commands/load-commands')
// const mongo = require('./mongo')

const client = new Discord.Client()

client.on('ready', async () => {
    console.log('The client is ready!')
    welcome(client)
    roleClaim(client)
    loadCommands(client)
    
    client.user.setPresence({
        activity: {
            name: '%RAS UdeC',
            type: 'LISTENING',
        },
    })

})

client.login(config.token)
