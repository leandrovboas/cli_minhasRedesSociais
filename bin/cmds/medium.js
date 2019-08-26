const chalk = require('chalk')
const figlet = require('figlet')
const medium = require('../../src/medium')

async function getInfoMedium() {
    console.log(`${chalk.white.inverse('Medium')}:   @leandrovboas      (https://medium.com/@leandrovboas)`)
}

async function getInfoMediumFull(){
    console.log(chalk.white(figlet.textSync('Medium')))
    console.log(`${chalk.white.inverse('Medium')}:   @leandrovboas      (https://medium.com/@leandrovboas)`)
    
    const resultadoDoMedium = await medium()
    resultadoDoMedium.forEach(element => {
        console.log();
        console.log(chalk.inverse.white("-------------------- Post -----------------"))
        console.log(`Titulo: ${element.title}`)
        console.log(`Data Publicacao: ${element.published}`)
        console.log(`Link: ${element.link}`)
    });
}

module.exports = (args) => {
    if(args.figlet){
        getInfoMediumFull()
    }else{
        getInfoMedium()
    }
}