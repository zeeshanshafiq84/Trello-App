document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card, .task');

    cards.forEach(function(card){
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragover', dragOver);
        card.addEventListener('drop', drop);
    });
});

function allowDrop(event) {
    event.preventDefault();
} 

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var cardId = event.dataTransfer.getData('text/plain');
    var card = document.getElementById(cardId);
    var targetList = event.target.closest('.card-list');
    targetList.appenChild(card);
}

function addTask() {
    var inputElement = documentById('task-input');
    var taskName = inputElement.value;

    if (taskName.trim() !== '') {
        var taskElement = document.createElement('');
        taskElement.className = 'task';
        taskElement.draggable = true;
        taskElement.id = 'task' + Date.now();
        taskElement.textContent = taskName;

        var todoList = document.getElementById('too-list');
        todoList.appendChild(taskElement);

        taskElement.addEventListener('dragstart', dragStart);
        taskElement.addEventListener('dragover', dragOver);
        taskElement.addEventListener('drop', drop);

        inputElement.value = '';
    }

}