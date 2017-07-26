$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(function(){
      $(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
 if(event.which ===13){
       var tdT = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + tdT + "</li>")     }
});
 

 $(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
 });