const chalk = require('chalk')
const figlet = require('figlet');
module.exports = (args) =>{

console.log(chalk.blue(figlet.textSync('Redes Sociais')))
    args.figlet = false;
    require('./twitter')(args)
    require('./github')(args)
    require('./medium')(args)
    require('./linkedin')(args)
}