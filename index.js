const Discord = require('discord.js')
const commando = require('discord.js-commando')
const bot = new commando.CommandoClient()
const TOKEN = 'NTUzNjEzODA3MDg4MzA0MTU5.D2QpCQ.0xHg9PsLRFX4dTQ4YqvtjB4RVMA'

bot.registry.registerGroup('random', 'Random')
bot.registry.registerGroup('misc', 'Misc')
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + '/commands')
bot.login(TOKEN)

bot.on('message', (message) => {
    if(message.content == 'ping')
    {
        //message.reply('This is working.')
        message.channel.send('pong!')
    }
})