// //タスク管理クラス

function deleteElement(elem){
    var index = elem.getAttribute("task-index");
    console.log(index);

    var res = [];
    taskList.forEach(function(task){
        if(task.index != index){
            res.push(task);
        }
    });
    taskList = res;
    saveTaskListToLocalStrage();
    location.reload();    
}

function checkElement(elem){
    var checked = elem.checked;
    var index = elem.getAttribute("task-index");

    console.log(checked);
    taskList.forEach(function(task){
        if(task.index == index){
            task.checked = elem.checked;
        }
    });
    saveTaskListToLocalStrage();
    location.reload();
}

//エンターキーが押されたら、新しいタスクを追加する。
function submitNewTask()
{
    if(window.event.keyCode==13){
        console.log("押された");
        var form = document.getElementById("task-create");
        var taskName = form._text.value;
        if(taskName === ""){
            return false;
        }
        taskList.push(new Task(taskName));
        saveTaskListToLocalStrage();
        form.submit();
    }
}

//タスクテーブルを生成する。
function makeTable(taskList){
    function getTaskForm(row, titleText){
        // var item = document.createElement("tr");
        var item1 = row.insertCell(-1);
        var item2 = row.insertCell(-1);
        var item3 = row.insertCell(-1);
        // item2.setAttribute("width","500px");

        item1.appendChild(getCheckButton(titleText));
        item2.appendChild(getTitleTextForm(titleText));
        item3.appendChild(getDeleteButton(titleText));
        // return item;
    }    

    var table = document.createElement("table");
    table.id = "form-box";
    taskList.forEach(
        function(task){
            var row = table.insertRow(-1);
            getTaskForm(row,task);
        }
    );
    var parent = document.getElementById("taskTable");
    parent.appendChild(table);
}

window.onload = function(){
    //実際はここでローカルストレージから読み込む
    // this.localStorage.clear();
    loadTaskListFromLocalStrage();
    makeTable(taskList);
}