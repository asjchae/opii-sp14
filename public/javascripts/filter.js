// $(function() {
// 	$(".meow").click(function (evt) {
// 		$('p').toggle()
// 	});
// });

$(function () {
  $('.filterstory').on('submit', function () {
    $.post("/filterstory", $(this).serialize());
    console.log(this);
  });
});