#!/usr/bin/env node
const chalk = require('chalk')
const minimist = require('minimist')
const fs = require('fs')
const path = require('path')

const args = minimist(process.argv.slice(2))
let cmd = (args._[0] || 'help').toLowerCase()
const filepath = getFilePath(cmd)

if (fs.existsSync(filepath)) {
  args.figlet = true
  require(filepath)(args)
}else{
  console.log(chalk.yellow(`
  ${cmd}" is not a valid command!
  `))
}

function helpCmd(cmd){
  return (cmd == '--help'|| cmd == '-h'|| cmd == 'help') ? 'help': cmd
}

function versionCmd(cmd){
  return (cmd == '--version'|| cmd == '-v'|| cmd == 'version') ? 'version': cmd
}

function getFilePath(cmd){
  cmd = helpCmd(cmd)
  cmd = versionCmd(cmd)
  return path.resolve(__dirname, `../bin/cmds/${cmd}.js`)
}