const enter = document.getElementById('enter');
const newTask = document.getElementById('newTask');
const list = document.getElementById('list');

function createTask() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newTask.value));
    list.appendChild(li);
    newTask.value = '';

    function doneTask() {
        li.classList.toggle('done');
    }
    li.addEventListener('click', doneTask)

    let erase = document.createElement("button");
	erase.appendChild(document.createTextNode("X"));
	li.appendChild(erase);
    erase.addEventListener("click", deleteListItem);
    
    function deleteListItem(){
		li.classList.add("delete")
	}
}

function addListAfterClick(){
	if (newTask.value.length > 0) {
		createTask();
	}
}

function addListAfterKeypress(event) {
	if (newTask.value.length > 0 && event.which ===13) {
		createTask();
	} 
}


enter.addEventListener("click",addListAfterClick);

newTask.addEventListener("keypress", addListAfterKeypress);