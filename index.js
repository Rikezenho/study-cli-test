#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const success = () => {
  console.log(chalk.white.bgGreen.bold(`Done! Everything is done.`));
};

const createFile = (filename, extension) => {
  const filePath = `${process.cwd()}/${filename}.${extension}`;
  shell.touch(filePath);
  return filePath;
};

const askQuestions = () => {
  const questions = [
    {
      name: "WANT_TO_NPMI",
      type: "confirm",
      message: "Do you want to install all dependencies?"
    }
  ];
  return inquirer.prompt(questions);
};

const init = () => {
  console.log(chalk.blue.bold(figlet.textSync("CLI Test")));

  shell.ls("-d", "module-*").forEach(file => {
    shell.cd(file);
    if (shell.find("package.json").length !== 0) {
      shell.exec("npm install");
      console.log(chalk.green.bgBlack(`${file} packages installed/updated!`));
    }
    shell.cd("..");
  });
};

const run = async () => {
  // show script introduction
  init();

  // ask questions
  //   const answers = await askQuestions();
  //   const { WANT_TO_NPMI } = answers;

  // create the file
  //   if (WANT_TO_NPMI) {
  //   }
  //   const filePath = createFile(FILENAME, EXTENSION);

  // show success message
  success();
};

run();
