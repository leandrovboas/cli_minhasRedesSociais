#!/usr/bin/env node
const chalk = require('chalk')
const minimist = require('minimist')
const fs = require('fs')
const path = require('path')


const args = minimist(process.argv.slice(2))
let cmd = (args._[0] || 'help').toLowerCase()
const filepath = path.resolve(__dirname, `../bin/cmds/${cmd}.js`)

if (fs.existsSync(filepath)) {
  args.figlet = true
  require(filepath)(args)
}else{
  console.log(chalk.yellow(`
  ${cmd}" is not a valid command!
  `))
}