
$(document).ready(function(){

 getCurrentTime();
var a;
$("#enterName").on("keypress",function(e)
 {
   if(e.which == 13) {
 	alert('You pressed enter!');
	  var a = $("#enterName").val();
var b = document.getElementById("#enterName");
        $("span#greetName").text(b);
	//localstorage.setItem("Name",a);
	//$("span#greetName").text(a);

}
});

 

$("#enterFocus").on("keypress",function(e) {
    if(e.which == 13) {
 	alert('You pressed enter!');
	var a = $("#enterFocus").val();
        $("span#greetFocus").text(a);
    }
});

});

function getCurrentTime(){
     var d = new Date();
     var hr = d.getHours();
     var min = d.getMinutes();
     var sec = d.getSeconds();
     cur_Date = hr + ":" + min + ":" +sec;
     setTimeout("getCurrentTime()",1000);
     // console.log(cur_Date);
     $("p#current_Time").text(cur_Date)  ;
	if(hr>=12 && hr<=20)
	{
	$("span#Good").text("Good Evening");
	}
	if(hr>20)
	{
	$("span#Good").text("Good Night");
	}
	if(hr<12){
	$("span#Good").text(" Good Morning");
	}
}





















$("#ul").on("click","li",function(){
	$(this).toggleClass("line");
});

$("#ul").on("click","span",function(event){
	$(this).parent().slideUp(function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input").keypress(function(event){
	if(event.which === 13){
		var input = $("input").val();
		$("input").val("");
		$("ul").append("<li class="li"> <span> <i class='fa fa-trash'></i> </span>" + input + "</li>" ).slideDown("slow");
	}
})

$("h1").on("click","span",function(){
	$("input").fadeToggle();
})

$("#div").css("border-bottom","5px solid pink")