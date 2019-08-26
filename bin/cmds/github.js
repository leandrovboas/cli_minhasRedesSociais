const chalk = require('chalk')
const figlet = require('figlet');
const github = require('../../src/github')

async function getInfoGithub(){
    console.log(`${chalk.yellow('Github')}:   @leandrovboas      (https://github.com/leandrovboas)`)
}

async function getInfoGithubFull(){
    console.log(chalk.yellow(figlet.textSync('Github')))
    console.log(`${chalk.yellow('Github')}:   @leandrovboas      (https://github.com/leandrovboas)`)
    console.log();
    console.log(`${chalk.blue("***** Top 5 *****")}`);
    
    const resultadoDoGithub = await github()
    for(i = 0; i<5; i++){
        console.log();
        console.log(chalk.inverse.white(`-------------------- Repopsitorio ${i + 1 } -----------------`))
        console.log(`Nome: ${resultadoDoGithub[i].name}`)
        console.log(`Link: ${resultadoDoGithub[i].url}`)
    }
}


module.exports = (args) =>{
    if(args.figlet){
        getInfoGithubFull()
    }else{
        getInfoGithub()
    }
}