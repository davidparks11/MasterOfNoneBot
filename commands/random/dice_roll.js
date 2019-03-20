const commando = require('discord.js-commando')

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll', 
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die with a certain number of sides',
            argsCount: 1,
            args: [ {
                    label: 'number of sides',
                    key: 'sides',
                    prompt: 'How many sides does the die have?',
                    type: 'integer'
                }
            ]
            
        })

    }

    async run(message, { sides }) {
        if (sides < 2) {
            message.reply('Nice try! But we don\'t have any objects with' +
                ' less than 2 sides to roll. We\'ll just roll a six sided' +
                ' die!\n ')
                sides = 6
        }
        var roll = Math.floor(Math.random()*sides) + 1
        message.reply('You rolled a ' + roll + '!')
    }
}

module.exports = DiceRollCommand