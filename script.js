// ჩამოსქროლვის დაწყება
$(document).ready(function() {
	$('#img1').click(function(){
		$('#page2').slideToggle("slow", function(){
		    if($('#page2').is(":visible")){
		        $("html, body").animate({scrollTop: $('#page2').offset().top},500);
		    }
		});
	});
	$("#span1").click(function() {
    $("#first-block").show(0);
    $("#second-block,#third-block,#forth-block,#fifth-block,#last-block").hide(0);
  	});
	$("#span2").click(function() {
    $("#second-block").show(0);
    $("#first-block,#third-block,f#orth-block,#fifth-block,#last-block").hide(0);
  	});
  	$("#span3").click(function() {
    $("#third-block").show(0);
    $("#first-block,#second-block,#forth-block,#fifth-block,#last-block").hide(0);
  	});
  	$("#span4").click(function() {
    $("#forth-block").show(0);
    $("#first-block,#second-block,#third-block,#fifth-block,#last-block").hide(0);
  	});
  	$("#span5").click(function() {
    $("#fifth-block").show(0);
    $("#first-block,#second-block,#third-block,#forth-block,#last-block").hide(0);
  	});
  	$("#burger1").click(function() {
    $("#msuqani").show(0);
    $(".person,#magali").hide(0);
  	});
  	$("#stafilo1").click(function() {
    $("#magali").show(0);
    $(".person,#msuqani").hide(0);
  	});
    $("#tren1").click(function() {
    $("#magali1").show(0);
    $(".person1,#msuqani1").hide(0);
    });
    $("#pad1").click(function() {
    $("#msuqani1").show(0);
    $(".person1,#magali1").hide(0);
    });
    $("#mta1").click(function() {
    $("#mtagif").show(0);
    $(".person2,#sigaretigif").hide(0);
    });
    $("#sigareti").click(function() {
    $("#sigaretigif").show(0);
    $(".person2,#mtagif").hide(0);
    });
    $("#eqimi1").click(function() {
    $("#eqimigif").show(0);
    $(".person3,#gugligif").hide(0);
    });
    $("#gugli1").click(function() {
    $("#gugligif").show(0);
    $(".person3,#eqimigif").hide(0);
    });
    $("#wyali1").click(function() {
    $("#wyaligif").show(0);
    $(".person4,#ludigif").hide(0);
    });
    $("#ludi1").click(function() {
    $("#ludigif").show(0);
    $(".person3,#wyaligif").hide(0);
    });
    $('#next').click(function() {
    $('.current').removeClass('current').hide()
        .next().show().addClass('current');
    if ($('.current').hasClass('last')) {
        $('#next').attr('disabled', true);
    }
    });
});
