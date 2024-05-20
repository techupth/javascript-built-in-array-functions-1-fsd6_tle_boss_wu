const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  return todos.filter(todo => todo.completed === true).map(todo => todo.topic)
}

const checkCompleted = getCompletedTodo(todos);
console.log("COMPLETE CHECK:\n" + checkCompleted.join("\n"))


