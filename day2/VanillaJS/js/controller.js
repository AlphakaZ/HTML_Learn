// //タスク管理クラス

function reloadList(){
    saveTaskListToLocalStrage();
    location.reload();//ページ読み込みではなく、タスクだけを再構築するようにする
    // makeTable();
}

function deleteElement(index){
    console.log(index);
    var res = [];
    taskList.forEach(function(task){
        if(task.index != index){
            res.push(task);
        }
    });
    taskList = res;
    reloadList();
}

function deleteAllElements(){
    taskList = [];
    console.log("All clear!");
    reloadList();
}

function checkAllElements(checked){
    taskList.forEach(function(task){
        task.checked = checked;
    });
    reloadList();
}

function checkElement(index,checked){
    console.log(checked);
    taskList.forEach(function(task){
        if(task.index == index){
            task.checked = checked;
        }
    });
    reloadList();
}

function changeElementTitle(index, newText){
    taskList.forEach(function(task){
        if(task.index == index){
            task.title = newText;
        }
    });
    reloadList();
}

//エンターキーが押されたら、新しいタスクを追加する。
function submitNewTask()
{
    if(window.event.keyCode==13){
        console.log("押された");
        var form = document.getElementById("main-form");
        var taskName = form.id_main_text.value;
        if(taskName === ""){
            return false;
        }
        taskList.push(new Task(taskName));
        reloadList();
    }
}

//タスクテーブルを生成する。
function makeTable(taskList){
    function getTaskForm(row, titleText){
        //それぞれチェッカー,編集,deleteボタン
        var item1 = row.insertCell(-1);
        var item2 = row.insertCell(-1);
        var item3 = row.insertCell(-1);

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
    var parent = document.getElementById("subTable");
    parent.childNodes = new Array();
    parent.appendChild(table);
}

(
    function initPage(){
        var item = document.getElementById("all-toggle-button");
        item.addEventListener("click",function(){
            checkAllElements(item.checked);//ブラウザを再読み込みするため機能しない
        });
    }
)();

window.onload = function(){
    loadTaskListFromLocalStrage();
    makeTable(taskList);
}