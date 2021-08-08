module.exports = {
    commands: ['pong'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      message.reply('Ping!')
    },
  }
  