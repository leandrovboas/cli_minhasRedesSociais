
const chalk = require('chalk')
const figlet = require('figlet')
module.exports = (args) =>{
    if(args.figlet){
        console.log(chalk.blue(figlet.textSync('Twitter')))
    }
    console.log(`${chalk.blue('Twitter')}:  @leandrovboas      (https://twitter.com/leandrovboas)`)
}