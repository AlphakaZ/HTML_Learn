function wrapWithTdElement(formElement){
    var tdBox = document.createElement("td");
    td.appendChild(formElement);
    return tdBox;
}

function getCheckButton()
{//チェックボタンを作る
    var item = document.createElement('form');    
    item.type = "checkbox";
    item.name = "cleared";
    item.className = "task-checkButton";

    //click時にシグナルを送信する設定も必要
    return wrapWithTdElement(item);
}

function getTitleTextForm(titleText)
{//中央のタイトルフォームを作る。ダブルクリック時の対応なども
    var item = document.createElement('form');
    item.type ="text";
    item.name = "title";
    item.className = "task-text";
    item.innerHTML(titleText);

    return wrapWithTdElement(item);
}

function getDeleteButton()
{
    var item = document.createElement('form');
    item.type = "button";
    item.name = "remove";
    item.className = "task-removeButton";

    return wrapWithTdElement(item);
}

function getTaskForm(titleText){
    var item = document.createElement("tr");
    item.appendChild(getCheckButton());
    item.appendChild(getTitleTextForm(titleText));
    item.appendChild(getDeleteButton());
    return item;
}