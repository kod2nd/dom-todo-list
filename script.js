const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];


// ============ Part 1 ==============
// - For each todo in the tasks array, append it to the `<ul id='todo-list'></ul>`

// Need to:
// Append items to to do list
// Create lists tags in the document -along with text-content
// Add a click Listener to toggle css text-decoration

// Create a function to create the li tag with text content set to the task (element of tasks)
let newListTags = (task) => {
	let newList = document.createElement('li');
	newList.textContent = task;

	// ??????What to do when the link is clicked? Create some function to add the css to the link.

	// Create a function to toggle classname from .done to blank
	const clickLink = () => {
		return newList.classList.toggle("done");
	}
	// Call clickLink function when the link is clicked
	newList.addEventListener('click', clickLink);

	// returns the li tag with the toggle and textContent set
	return newList;
}


// need to locate and add lists to the #todo-list
let appendTodoList = (task) => {
	document.querySelector("#todo-list").appendChild(newListTags(task));
}

// Need to use for each at some point to loop through tasks list
tasks.forEach(appendTodoList);



//At some point create a css class .done


// ================= Part 2 =======================

// Add an input textbox
const textBox = document.createElement('input');
textBox.placeholder = "Enter a new task";
// Insert before the JavaScript <script> tag
document.body.insertBefore(textBox, document.querySelector('script'))


// Add a button that takes the input of the textbox and add a new html list

const addInputToList = () => {
	// Take value from input box
	const userInput = document.querySelector('input');
	// Take the value of the input and add it to a list. Recall the append function/
	appendTodoList(userInput.value);
	// reset the value to blank
	userInput.value = ''

}

// Create a button to Add New Task
const addToListButton = document.createElement('button');
addToListButton.textContent = "Add New Task";
addToListButton.id = 'newTask';
// When the button is clicked, run addInputToList function
addToListButton.addEventListener('click',addInputToList);
// Insert before the JavaScript <script> tag
document.body.insertBefore(addToListButton, document.querySelector('script'));

// ============ Can be entered with the 'Enter' Key ==============

// If user presses an enter Key and the input box is not blank add the input to the list; by running the addInputToList function
textBox.addEventListener("keydown", (e) => {
	if (e.keyCode === 13 && textBox.value !== ''){
	addInputToList()}
  });



// ===========Clear done items button============

// Create a function that looks for all the ".done" html elements
// loop through the array of found ".done" elements
// remove them
const clearStriked = () => {
	const doneItemsArray = document.querySelectorAll('.done');
	console.log(doneItemsArray);

	const removeElement = () => {document.querySelector('.done').remove()};
	// const logger = (element) => {console.log(element)};
	doneItemsArray.forEach(removeElement)
}

// When the button is pressed, run clearStriked Function
const clearButton = document.createElement('button');
clearButton.textContent = "Clear Done Items";
clearButton.addEventListener('click', clearStriked);

document.body.insertBefore(clearButton, document.querySelector('script'));




