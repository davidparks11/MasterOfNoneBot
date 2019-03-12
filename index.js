const Discord = require('discord.js')
const commando = require('discord.js-commando')
const config = require('./config.js')
const bot = new commando.CommandoClient()
const TOKEN = config.TOKEN

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