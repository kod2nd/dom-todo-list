const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

// - For each todo in the tasks array, append it to the `<ul id='todo-list'></ul>`


//Append items to to do list
// need to create lists tags in the document -along with text-content
// Add a click Listener to toggle css text-decoration


let newListTags = (task) => {
	let newList = document.createElement('li');
	newList.textContent = task;

	// What to do when the link is clicked? Create some function to add the css to the link.
	const clickLink = () => {
		return newList.classList.toggle("done");
	}

	newList.addEventListener('click', clickLink);

	return newList;
}


// need to locate and add lists to the #todo-list

let appendTodoList = (task) => {
	document.querySelector("#todo-list").appendChild(newListTags(task));
}


// Need to use for each at some point to loop through tasks list

tasks.forEach(appendTodoList);

//At some point create a css class .done

// ====== Part 2 ========

// Add an input textbox
const textBox = document.createElement('input');
textBox.placeholder = "Enter a new task";
// Insert before the JavaScript
document.body.insertBefore(textBox, document.querySelector('script'))

// Add a button

const addInputToList = () => {
	// Take value from input box
	const userInput = document.querySelector('input').value;
	// Take the input and add it to a list. Recall the append function/
	appendTodoList(userInput);

}

const addToListButton = document.createElement('button');
addToListButton.textContent = "Add New Task";
addToListButton.addEventListener('click',addInputToList);
// Insert before the JavaScript
document.body.insertBefore(addToListButton, document.querySelector('script'));





