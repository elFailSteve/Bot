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

client.login("ODI3NzA5NjM4NzEwOTE5MjEy.GftSlo.rDHk5MH1w23Us7JShe7BBQidCknBOZ6Jl-L87I")