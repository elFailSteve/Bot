const Token = require('./Token.json')
const Discord = require('discord.js')

const client = new Discord.Client({
    intents:[
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
    ]
})

client.on('ready', () => {
    console.log("Listo")
})

client.on('messageCreate', message => {
    if(message.content == "h") {
        message.channel.send("Adios")
    }
})

client.login(Token.Token)