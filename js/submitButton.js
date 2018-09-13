$(document).ready(function() {
	var submitButton = $('#submitButton');
	submitButton.click(function(e) {
		e.preventDefault();
		$('#submitAlert').slideDown();
	})
})

