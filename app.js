const git = require('gh-pages')

git.publish('src', {
    branch: 'gh-pages',
    repo: 'https://github.com/elFailSteve/Bot.git'
}, (err) => {
    console.log(err)
})