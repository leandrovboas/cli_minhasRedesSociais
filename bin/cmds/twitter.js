
const chalk = require('chalk')
const figlet = require('figlet')
module.exports = (args) =>{
    if(args.figlet){
        console.log(chalk.blue(figlet.textSync('Linkedin')))
    }
    console.log(`${chalk.blue('Twitter')}:  @leandrovboas      (https://twitter.com/leandrovboas)`)
}