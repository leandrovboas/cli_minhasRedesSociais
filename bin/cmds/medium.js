const chalk = require('chalk')
const figlet = require('figlet')
module.exports = (args) =>{
    if(args.figlet){
        console.log(chalk.white(figlet.textSync('Medium')))
    }
    console.log(`${chalk.white.inverse('Medium')}:   @leandrovboas      (https://medium.com/@leandrovboas)`)
}