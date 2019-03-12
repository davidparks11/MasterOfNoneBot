const Discord = require('discord.js')
const commando = require('discord.js-commando')
const config = require('./config.js')
const bot = new commando.CommandoClient()
const TOKEN = config.TOKEN //login token from config.js

bot.registry.registerGroup('random', 'Random') //group for psuedo-random commands
bot.registry.registerGroup('entertainment', 'Entertainment')
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + '/commands')
bot.login(TOKEN)
