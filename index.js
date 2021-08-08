const config = require('./config.json')
const path = require('path')
const fs = require('fs')
const roleClaim = require('./role-claim')
const welcome = require('./welcome')
// const mongo = require('./mongo')

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async () => {
    console.log('The client is ready!')
    welcome(client)
    roleClaim(client)

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }
    readCommands('commands')

    client.user.setPresence({
        activity: {
            name: 'RAS UdeC',
            type: 0,
        },
    })

})

client.login(config.token)
