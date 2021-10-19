const chalk = require('chalk')
const todos = require('./todos')

function getMenu () {
  const todoList = todos.map((todo, i) => {
    const symbol = todo.isComplete ? '☑️' : '🆇'
    
    return `${ i + 1 }. ${ symbol } ${ todo.text }`
  }).join('\n')

  const menu = `${chalk.blue.bold('Choose a todo to edit (by entering its number) or choose an option at the bottom (by letter):')}
${todoList}
(n) Add new todo.
(q) Quit
`

  return menu;
}

module.exports = getMenu;

// a ternary looks at three values
// and evaluates to ONE VALUE

// don't do ANYTHING in your ternary
// besides evaluate it to a new value

// the pattern is: condition ? value1 : value2
// const number = 16;
// const oddness = (number % 2 === 0) ? 'Even' : 'Odd'

// // no, bad
// (number % 2 === 0) ? console.log('even') : console.log('odd')

// const age = 16;
// const status = (age >= 18 && age <= 100) ? 'Driver' : 'Learner';
// status; //> 'Learner'

// const getEvenness = (num) => num % 2 === 0 ? 'Even' : 'Odd'

// <ul>
//   <li class={todo.isComplete ? 'done' : 'not-done'}>{todo.text}</li>
// </ul>