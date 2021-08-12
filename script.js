// Busca a UL dentro da DIV
var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector("#app input");

var buttonElement = document.querySelector("#app button");

var taskList = JSON.parse(localStorage.getItem('task_list')) || [];



function renderTaskList() {

    listElement.innerHTML = '';

    for(item of taskList) {
        console.log(item);

        let itemElement = document.createElement('li');
        let itemText = document.createTextNode(item);

        let removeElement = document.createElement('button');
        let removeText = document.createTextNode('X');
        let position = taskList.indexOf(item);
        removeElement.setAttribute('onclick', 'remove('+ position +')');
        

        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);

        removeElement.appendChild(removeText);
        listElement.appendChild(removeElement);
    }
}

renderTaskList();

function add() {
    
    if (inputElement.value == '') {
        alert("Digite uma tarefa!");
        return false;
    }

    else {

    let itemText = inputElement.value;
    taskList.push(itemText);
    inputElement.value = '';
    renderTaskList();
    save();
    }
    
}



function remove(position) {

        taskList.splice(position, 1);
        renderTaskList();
        save();
}


function save() {

    localStorage.setItem('task_list', JSON.stringify(taskList));
}

// buttonElement.onclick = add;

