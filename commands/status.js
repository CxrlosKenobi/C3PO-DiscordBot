module.exports = {
    commands: 'status',
    description: 'Set a presence status',
    permissionError: 'Uh Oh! You need admin permissions to run this command',
    minArgs: 1,
    // maxArgs: [],
    callback: (message, arguments, text) => {
        const content = message.content.replace('%status ', '')

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
}
