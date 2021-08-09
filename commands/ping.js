module.exports = {
    commands: ['ping'],
    minArgs: 0,
    maxArgs: 0,
    description: 'Plays table tennis!',
    callback: (message, arguments, text) => {
      message.reply('Pong!')
    },
}