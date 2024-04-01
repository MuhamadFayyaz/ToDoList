#! /usr/bin/env node

import inquirer from "inquirer"

let toDos = [];
let condition = true;

while (condition){
let addTask = await inquirer.prompt([
    {

    name:'todo',
    type:'input',
    message:'WHAT YOU WANT TO ADD IN YOUR TODO LIST.......?'

},{

    name:'addmore',
    type:'confirm',
    message:"DO YOU WANT TO ADD MORE TODOS...?",
    default:"false"
}
]
);
toDos.push(addTask.todo);
condition = addTask.addmore
toDos.forEach(toDo=>console.log(toDo));
}




