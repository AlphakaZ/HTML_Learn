class task{
    constructor(title){
        this.title = title;
        this.cleared = false;
    }
}

function wrapWithTdElement(formElement){
    var tdBox = document.createElement("td");

    var form = document.createElement("form");
    form.appendChild(formElement);

    tdBox.appendChild(form);
    return tdBox;
}

function getCheckButton()
{//チェックボタンを作る
    var item = document.createElement('input');
    item.setAttribute("type","checkbox");    
    item.setAttribute("value","1");
    item.className = "task-checkButton";

    // item.addEventListener("click",function(){console.log(term);});
    // item.addEventListener("dblclick",function(){console.log("Edit" + term);});

    //click時にシグナルを送信する設定も必要
    // return wrapWithTdElement(item);
    return item;
}

function getTitleTextForm(titleText)
{//中央のタイトルフォームを作る。ダブルクリック時の対応なども
    var item = document.createElement('input');
    item.setAttribute("type","text");    
    item.setAttribute("value",titleText);
    // item.setAttribute("readOnly","true");
    item.className = "task-text";

    item.addEventListener("dblclick",function(){
       if(item.getAttribute("readOnly")){
           item.setAttribute("readOnly","false");
           console.log(titleText);
       }
    });

    // return wrapWithTdElement(item);
    return item;
}

function getDeleteButton()
{
    var item = document.createElement('input');
    item.setAttribute("type","button");
    item.setAttribute("name","remove");
    item.className = "task-removeButton";

    // return wrapWithTdElement(item);
    return item;
}

function getTaskForm(row, titleText){
    // var item = document.createElement("tr");
    var item1 = row.insertCell(-1);
    var item2 = row.insertCell(-1);
    var item3 = row.insertCell(-1);

    item1.appendChild(getCheckButton());
    item2.appendChild(getTitleTextForm(titleText));
    item3.appendChild(getDeleteButton());
    // return item;
}
termList = 0;
if(termList){

}

var rawData = localStorage.getItem("data");
termList = JSON.parse(rawData);

function saveTaskListToLocalStrage(){
    var data = JSON.stringify(taskList);
    localStorage.setItem("data",data);    
}

// function go()
// {
//     if(window.event.keyCode==13){
//         console.log("押された");
//         var form = document.getElementById("task-create");
//         termList.push('追加');
//         form.submit();
//     }
// }

function makeTable(termList){
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
    
    makeTable(termList);
}