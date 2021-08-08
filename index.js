const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const roleClaim = require('./role-claim')
const welcome = require('./welcome')
const mongo = require('./mongo')

client.on('ready', () => {
    console.log('The client is ready!')
    welcome(client)
    roleClaim(client)

    await mongo().then((mongoose) => {
        try {
            console.log('Connected to mongo!')
        } finally {
            mongoose.connection.close()
        }
    })

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

    command(client, 'embed', (message) => {
        // const logo = ''
        const embed = new Discord.MessageEmbed()
            .setTitle('Embed Test')
            .setDescription('This is a test embed!')
            .setColor(0x00ff00)
            .setAuthor(message.author.username)
            // .setImage(logo)
            .setFooter('This is a footer!')
        
        message.channel.send(embed)
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
