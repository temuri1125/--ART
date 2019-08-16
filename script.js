// ჩამოსქროლვის დაწყება
$(document).ready(function() {
	$('#img1').click(function(){
		$('#page2').slideToggle("slow", function(){
		    if($('#page2').is(":visible")){
		        $("html, body").animate({scrollTop: $('#page2').offset().top},300);
		    }
		});
	});
})

// ჩამოსქროლვის დასრულება

// არჩევანის დაწყება
// $('#burger1').click(function() {
//   $('.msuqani').show();
// });



$(document).ready(function(){
  $("#burger1").click(function() {
    $(".person").hide(0);
    $("#msuqani").show(0);
  });
});


// არჩევანის დასრულება
