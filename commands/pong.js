module.exports = {
    commands: ['pong'],
    description: 'Plays table tennis!',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      message.reply('Ping!')
    },
  }
  