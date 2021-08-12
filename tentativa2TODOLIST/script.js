var input_task = document.querySelector('#input_task');

var input_time = document.querySelector('#input_time');

var add_button = document.querySelector('#add_button');

var list_element = document.querySelector('#li');


var todo_list = JSON.parse(localStorage.getItem('toDoList')) || [];


function render() {

    list_element.innerHTML = '';

    for (task of todo_list) {

        let taskElement = document.createElement('li');
        let taskText = document.createTextNode(task);
        taskElement.appendChild(taskText);

        let position = todo_list.indexOf(task);
        let deleteElement = document.createElement('button');
        let deleteText = document.createTextNode('X');
        deleteElement.setAttribute('onclick', 'remove('+position+')');
        deleteElement.setAttribute('class', 'remove_button');
        deleteElement.appendChild(deleteText);

        list_element.appendChild(taskElement);
        list_element.appendChild(deleteElement);


    }
}

render();


function add() {

    if (input_task.value == '') {
        alert('Enter a task!');
        return false;
    }
    else if(input_time.value == '') {
        alert('Enter a time!');
        return false;
    }
    else{
        let taskText = input_task.value;
        let time = input_time.value;
        todo_list.push(taskText + ' - ' + time);
        input_task.value = '';
        input_time.value = '';
        render();
        save();
    }
}

function remove(position) {
    todo_list.splice(position, 1);
    render();
    save();
}

function clearFunction() {
    for(task in todo_list) {
        todo_list.splice(task);
    }
    localStorage.clear();
    render();
}

function verified() {
    input_task.value = 'batatinha';
}

function save() {
    localStorage.setItem('toDoList', JSON.stringify(todo_list));
}