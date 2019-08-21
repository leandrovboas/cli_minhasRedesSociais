const chalk = require('chalk')
const figlet = require('figlet');
module.exports = (args) =>{
    if(args.figlet){
        console.log(chalk.yellow(figlet.textSync('Github')))
    }
    console.log(`${chalk.yellow('Github')}:   @leandrovboas      (https://github.com/leandrovboas)`)
}