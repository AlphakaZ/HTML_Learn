


var taskList = [];

//ローカルストレージへの読み書き関数
function loadTaskListFromLocalStrage(){
    var rawData = localStorage.getItem("data");
    taskList = JSON.parse(rawData);
    if(taskList == null){taskList = []};
    console.log("Load"+taskList);
}

function saveTaskListToLocalStrage(){
    var data = JSON.stringify(taskList);
    localStorage.setItem("data",data);
    console.log("Save"+taskList);
}

//taskListに入っているTaskの中で、最も大きなインデックスを返す(一意性の保持)
function getMaxIndexFromTaskList(){
    var max = 0;
    if(taskList == null){
        return 0;
    }
    taskList.forEach(function(task){if(task.index > max){max = task.index;}});
    return max;
}