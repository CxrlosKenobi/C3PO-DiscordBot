module.exports = {
    commands: ['cc', 'clearChannel'],
    description: 'Clear the channel chat',
    permissionError: 'Uh Oh! You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
        })
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
}
