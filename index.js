const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const roleClaim = require('./role-claim')

client.on('ready', () => {
    console.log('The client is ready!')
    roleClaim(client)

    command(client, ['ping', 'TestingBot'], (message) => {
        message.channel.send('Pong!')
    })

    command(client, ['cc', 'clearChannel'], (message) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })

    command(client, ['status'], message => {
        const content = message.content.replace('%status ', '')

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })

    })
})

client.login(config.token)