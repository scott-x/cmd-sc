#!/usr/bin/env node
'use strict'
var program = require('commander');
var chalk = require('chalk');
var inquirer = require('inquirer');

program.version(require('../package').version)
.usage('<command> [options]');

program
    .command('init')
    .description('init your react project')
    .alias('i')
    .action(() => {
    	let appName=process.argv[3];
    	if (!appName) {
    		appName = 'myApp'
    	}
    	console.log(appName)
    	require('../task/init')
    })


program
.command('generate')
.description('generate react component')
.alias('g')
.action(function(){
	
});
program.parse(process.argv)

if(!program.args.length){
    program.help()
}

