module.exports = (args) => {
    const subCmd = args._[0] === 'help'
     ? args._[1]
     : args._[0]
    console.log(menus[subCmd] || menus.main)
}
const menus = {
 main: `

 redes-sociais .............. Exibe minha redes sociais
 twitter .................... Exibe meu Twitter
 linkedin ................... Exibe meu Linkedin
 medium ..................... Exibe meu Medium
 github ..................... Exibe meu Github
 
 `,
}