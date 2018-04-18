
//各フォームの生成
function getCheckButton(task)
{//チェックボタンを作る
    var item = document.createElement('input');
    item.setAttribute("type","checkbox");
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