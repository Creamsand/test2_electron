//初期化
$(window).on('load', function() {
    $('#windowtitle').text('Launcher');

    //$('#lch_list').text(require("os").userInfo().username);
    
    //HTMLを生成
    $.getJSON("./config/default.json", function(e){
        $('#lch_list').text(e.core.ver)
    })
})