$("ul").on("click","li",function(){
	$(this).toggleClass("line");
});

$("ul").on("click","span",function(event){
	$(this).parent().slideUp(function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input").keypress(function(event){
	if(event.which === 13){
		var input = $("input").val();
		$("input").val("");
		$("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + input + "</li>" ).slideDown("slow");
	}
})

$("h1").on("click","span",function(){
	$("input").fadeToggle();
})

$("#div").css("border-bottom","5px solid pink")