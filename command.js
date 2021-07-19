#!/usr/bin/env node
const program = require('commander');
const { version } = require('commander');
const touch = require('touch');
const consola = require('consola');
const chalk = require('chalk');
const fs = require('fs');
const Git = require('nodegit');

program
     .version('1.0.0')
     .description('A CLI for creating a MoonWalker App')

program
     .command('create <dirname>')
     .description('Create a MoonWalker Project in the specified Directory')
     .action((dirname) => {
          fs.access(`./${dirname}`, function (error) {
               if (error) {
                    fs.mkdir(dirname, () => {
                         consola.success(chalk.greenBright(`Created Directory ${dirname}`));

                         const url = 'https://github.com/MoonWalkerHTTP/moonwalker-app-template.git';

                         Git.Clone(url, dirname).then(() => {
                              fs.rmdir(`./${dirname}/.git`, () => {
                                   consola.success(chalk.greenBright('Repository Successfully Cloned!'));
                                   console.log('');
                              });
                         }).then(() => {
                              consola.success(chalk.greenBright('Done!'));
                              console.log('To Begin Coding,');
                              console.log(`cd ${dirname}`);
                              console.log('npm i');
                              console.log('git remote remove origin');
                              console.log('Open the Directory in your code editor');
                              console.log('You are Ready to Start coding!');
                         })
                    });
               } else {
                    const url = 'https://github.com/MoonWalkerHTTP/moonwalker-app-template.git';

                    Git.Clone(url, dirname).then(() => {
                         fs.rmdir(`./${dirname}/.git`, () => {
                              consola.success(chalk.greenBright('Repository Successfully Cloned!'));
                              console.log('');
                         });
                    }).then(() => {
                         consola.success(chalk.greenBright('Done!'));
                         console.log('To Begin Coding,');
                         console.log(`cd ${dirname}`);
                         console.log('npm i');
                         console.log('git remote remove origin');
                         console.log('Open the Directory in your code editor');
                         console.log('You are Ready to Start coding!');
                    })
               }
          })
     })

program.parse(process.argv); 