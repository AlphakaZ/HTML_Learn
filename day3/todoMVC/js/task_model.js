class Task{
    constructor(title){
        this.title = title;
        this.checked = false;
        this.index = getMaxIndexFromList() + 1;
    }
}

function addNewTask(title){
    var task = new Task(title);
    taskList.push(task);
    return task.index;
}

function checkTask(index, checked){
    taskList.forEach(function(task){
        if(task.index == index){
            task.checked = checked;
        }
    });
}

function removeTask(index){
    
}