const chalk = require('chalk')
const figlet = require('figlet')
module.exports = (args) =>{
    if(args.figlet){
        console.log(chalk.blue(figlet.textSync('Linkedin')))
    }
    console.log(`${chalk.blue('Linkedin')}: Leandro Vilas Boas (https://br.linkedin.com/in/leandro-vilas-boas-55403b2b)`)
}