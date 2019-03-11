const discord = require('discord.js')
const commando = require('discord.js-commando')
const snekfetch = require('snekfetch')

class GrabMeme extends commando.Command {
    constructor(client) {
        super(client, {
            name:'meme',
            group: 'misc',
            memberName: 'meme',
            description: 'Pulls a new or not new dank meme '
            + 'from r/dankmemes'
        })
    }

    async run(message, args) {
        try {
            const { body } = await snekfetch
                .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=day')
                .query({limit:800})
            const allowed = message.channel.nsfw ? body.data.children :
                body.data.children.filter(post => !post.data.over_18)
            if (!allowed.length) return message.reply('Sadly the memes aren\'t '
                + 'dank enough right now. Try again later!')
            const rand_num = Math.floor(Math.random * allowed.length)
            const embeded = new discord.RichEmbed()
                .setColor(0x00A2E8)
                .setTitle(allowed[rand_num].data.title)
                .setDescription("Posted by: " + allowed[rand_num].data.author)
                .setImage(allowed[rand_num].data.url)
                .addField("Other info:", "Up votes: " + allowed[rand_num].data.ups
                     + " / Comments: " + allowed[rand_num].data.num_comments)
                .setFooter("Memes provided by r/dankmemes")
                console.log('WORKING')
            message.channel.send(embeded)
        } catch (err) {
            return console.log(err)
        }
    }
}

module.exports = GrabMeme