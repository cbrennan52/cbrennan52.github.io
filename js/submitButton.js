$(document).ready(function() {
	$('#summernote').summernote({
		placeholder : 'We can\'t wait to hear from you!'
	});
	var submitButton = $('#submitButton');
	submitButton.click(function(e) {
		e.preventDefault();
		$('#submitAlert').slideDown();
	})
})

