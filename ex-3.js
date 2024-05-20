const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
	return todos.map(todo => todo.topic);
}
const showTodoTopic = getTodoTopics(todos);
console.log("TOPIC is:\n" + showTodoTopic.join("\n"));

