
//各フォームの生成
function getCheckButton(task)
{//チェックボタンを作る
    var item = document.createElement('input');
    item.setAttribute("type","checkbox");
    item.setAttribute("name",task.title);
    item.setAttribute("task-index",task.index);

    item.checked = task.checked;
    item.className =  "task-elements task-checkbox";

    item.addEventListener("click",function(){
        checkElement(item.getAttribute("task-index"),item.checked);
    });

    return item;
}

function getTitleTextForm(task)
{//中央のタイトルフォームを作る。ダブルクリック時の対応なども
    var item = document.createElement('input');
    item.setAttribute("type","text");
    item.setAttribute("value",task.title);
    item.setAttribute("name",task.title);
    item.id = "id_text";
    item.setAttribute("task-index",task.index);
    item.readOnly = true;
    item.onclick = "checkElement(this);";
    item.className = "task-elements task-text";

    item.addEventListener("dblclick",function(){
       if(item.readOnly){
           console.log(task.title);
           item.readOnly = false;
       }
    });
    item.addEventListener("keypress",function(e){
        var key = e.which || e.keyCode;
        if (key === 13) {
            changeElementTitle(item.getAttribute("task-index"),item.value);
        }
    });
    return item;
}

function getDeleteButton(task)
{
    var item = document.createElement('input');
    item.setAttribute("type","button");
    item.setAttribute("name",task.name);
    // item.setAttribute("onclick","deleteElement(this)");
    item.setAttribute("task-index",task.index);
    item.className =  "task-elements task-removeButton";
    item.innerHTML = '×';

    item.addEventListener("click",function(){
        deleteElement(item.getAttribute("task-index"));
    });

    // return wrapWithTdElement(item);
    return item;
}