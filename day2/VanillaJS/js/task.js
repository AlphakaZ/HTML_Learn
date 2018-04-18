//タスク管理クラス

//タスクの一意性を管理するクロージャ

function getMaxIndexFromList(){
    var max = 0;
    if(taskList == null){
        return 0;
    }
    taskList.forEach(function(task){if(task.index > max){max = task.index;}});
    return max;
}

class Task{
    constructor(title){
        this.title = title;
        this.checked = false;
        this.index = getMaxIndexFromList() + 1;
    }
}

var taskList = [];

//各フォーム生成
function getCheckButton(task)
{//チェックボタンを作る
    var item = document.createElement('input');
    item.setAttribute("type","checkbox");    
    // item.setAttribute("checked",task.checked);
    item.checked = task.checked;
    item.setAttribute("name",task.title);
    item.setAttribute("task-index",task.index);
    item.id = "task-checkButton";
    item.className =  "task-elements";
    return item;
}

function getTitleTextForm(task)
{//中央のタイトルフォームを作る。ダブルクリック時の対応なども
    var item = document.createElement('input');
    item.setAttribute("type","text");
    item.setAttribute("value",task.title);
    item.setAttribute("name",task.title);
    item.setAttribute("task-index",task.index);
    // item.setAttribute("onclick","checkElement(this)");
    item.onclick = "checkElement(this);";
    item.id = "task-text";
    // item.setAttribute("readOnly","true");
    item.className = "task-elements";

    item.addEventListener("dblclick",function(){
       if(item.getAttribute("readOnly")){
           item.setAttribute("readOnly","false");
           console.log(titleText);
       }
    });
    return item;
}

function getDeleteButton(task)
{
    var item = document.createElement('input');
    item.setAttribute("type","button");
    item.setAttribute("name",task.name);
    item.setAttribute("onclick","deleteElement(this)");
    item.setAttribute("task-index",task.index);
    item.id = "task-removeButton";
    item.className =  "task-elements";
    item.innerHTML = "x";

    // return wrapWithTdElement(item);
    return item;
}

// 指定した要素を削除する。
// Bug: 同名のタスクも消される
function deleteElement(elem){
    //elemから、タスク名を取り出す。
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
    // var checked = elem.getAttribute("checked");
    var checked = elem.checked;
    console.log(checked);
    
    var index = elem.getAttribute("task-index");
    taskList.forEach(function(task){
        if(task.index == index){
            task.checked = elem.checked;
        }
    });
    saveTaskListToLocalStrage();
    location.reload();
}


//ローカルストレージへの読み書き関数
function loadTaskListFromLocalStrage(){
    var rawData = localStorage.getItem("data");
    taskList = JSON.parse(rawData);
    console.log(taskList);
    if(taskList == null){taskList = []};
}
function saveTaskListToLocalStrage(){

    // taskList.forEach(function(task){
    //     var dat = JSON.stringify(task)
    // });

    var data = JSON.stringify(taskList);
    console.log(data);
    
    localStorage.setItem("data",data);
    console.log("Save:");
    
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