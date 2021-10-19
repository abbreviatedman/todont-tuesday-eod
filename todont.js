const readlineSync = require('readline-sync')
const chalk = require('chalk')
const getMenu = require('./getMenu')
const editTodo = require('./editTodo')
const todos = require('./todos')
const makeTodo = require('./makeTodo')

console.clear()
let response = readlineSync.question(getMenu()).toLowerCase()

while (response !== 'q') {
  if (isNaN(response) === false) {
    const todo = todos[response - 1]
    editTodo(todo);
  } else if (response === 'n') {
    console.clear()
    // get the text from the user
    const text = readlineSync.question('What task do you want to add?\n\n');
    // make a new todo out of it
    const todo = makeTodo(text)
    // put it in our todo list
    todos.unshift(todo)
    console.clear()
  } else {
    console.log(chalk.red.bold(`${response} is not a valid input.`))
  }

  response = readlineSync.question(getMenu())
  console.clear()
}