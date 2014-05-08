$(document).ready(function() {
	$('.delExp').click(function (){
		var id = $(this).attr("id");
		$.post('/deleteExp', { id: id });
		$(this).parent().remove();
	});
});