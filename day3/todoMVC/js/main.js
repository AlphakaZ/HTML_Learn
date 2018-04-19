
function taskTemplate(title,index){
    var tr = $("<tr></tr>");
    var checkbox = $("<input></input>",{
        type:  "checkbox",
        "class": "checkbox",
        "task-index": index
    });
    var checkbox_td = $("<td></td>");
    checkbox_td.append(checkbox);

    var text = $("<input></input>",{
        type: "text",
        "class": "text",
        value: title,
        "task-index": index
    });
    var text_td = $("<td></td>");
    checkbox_td.append(text);

    var button = $("<input></input>",{
        type: "button",
        "class": "button",
        value: "×",
        "task-index": index
    });
    var button_td = $("<td></td>");
    checkbox_td.append(button);
    
    tr.append(checkbox_td);
    tr.append(text_td);
    tr.append(button_td);
    return tr;
}

$(()=>{
    //個々の枠の設定
    $("td").css("background-color","white");
    $("td").css("margin","0 auto");
    $("table").css("width","600px");
    $("td").css("height","62px");
    $("input.checkbox").css("width","62px");
    $("input.button").css("width","62px");
    $("input.text").css("text-align","left");


    //エンターキーが押された時のイベント。
    $( '#id_main_text' ).keypress( function ( e ) {
        if ( e.which == 13 ) {
            // ここに処理を記述
            var a = $('#id_main_text').val();
            $('#id_main_text').val("");
            var index = addNewTask(a);
            
            $("#sub-table").append(taskTemplate(a,index));
        }
    });

    $('.checkbox').click(function(){
        var id =  $(this).attr("task-index");
        
    });

});