$(window).load(function() {
    $('#content').html($('#place_content').html());
    $('.menu').html("");
    $('.genres').html("");
    var str = "";
    categories.forEach(function(obj){str+="<p id='"+obj.id+"' class='menuitem'>"+obj.name+"</p>";});
    $('.menu').html(str);
    var tot = 0;
    $('.menu p').each(function(){
        $(this).css('width','auto');
        $(this).css('padding','0 '+catpad/2+'px 0 '+catpad/2+'px');
        console.log($(this).css('width'));
        tot+=parseInt($(this).css('width').split('px'))+catpad;
    });
    $('.menu').css('width',tot+'px');

    str="";
    genrelist.forEach(function(obj){str+="<p id='"+obj.id+"' class='genresitem'>"+obj.name+"</p>";});
    $('.genres').html(str);
    $('.genres').toggle();
    tot = 0;
    $('.genresitem').each(function(){
        $(this).css('width','auto');
        $(this).css('padding','0 '+genpad/2+'px 0 '+genpad/2+'px');
        console.log($(this).css('width'));
        tot+=parseInt($(this).css('width').split('px'))+genpad;
    });
    $('.genres').css('width',tot+'px');
    $('.genres').toggle();


    // menu clicked
    $('.menuitem').click(function(){
        $('#content').html($('#place_content').html());
        $('.menuitem').each(function() {
            $(this).css('borderBottom','');
        });
        $('.genresitem').each(function() {
            $(this).css('borderBottom','');
        });

        var col = "";
        for (var i = 0; i < categories.length; i++) {
            if (categories[i]["id"] == $(this).attr("id")) {
                col = categories[i]["color"];
            }
            console.log(col);
        }
        $(this).css('borderBottom','2px solid '+col);

        if(type_id==$(this).attr("id")||$('.genres').is(":hidden")){
            $('.genres').toggle();
        }
        if($('.genres').is(":visible")){
            $('.genres').css('borderTop','2px solid '+col);
        }

        type_id=$(this).attr("id");
    });

    // genre clicked
    $('.genresitem').click(function(){

        $('.genresitem').each(function() {
            $(this).css('borderBottom','');
        });

        var col = "";
        for (var i = 0; i < genrelist.length; i++) {
            if (genrelist[i]["id"] == $(this).attr("id")) {
                col = genrelist[i]["color"];
            }
            console.log(col);
        }
        $(this).css('borderBottom','2px solid '+col);

        var txt = "";
        var id = $(this).attr('id');
        //console.log($(this).attr('id'));
        list[type_id].forEach(function(obj){if(obj.genre==id)txt+="<a href='"+obj.url+"'>"+obj.title+"</a><br>"});
        console.log(txt);
        $('#content').html(txt);
    });

});
