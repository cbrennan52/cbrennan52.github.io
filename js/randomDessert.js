$(document).ready(function() {
	var dessertGenerator = $('#dessertGenerator');
	dessertGenerator.click(function() {
		var desserts = ['double chocolate chip cookie', 'peanut butter cup shake', 'butterscotch pudding', 'ice cream sundae', 'popsicle', 'brownie', 'blondie', 'birthday cake', 'cinnamon gelato'];
		var randomDessert = desserts[Math.floor(Math.random() * desserts.length)];
		$('#dessertGenOutput').html('<p>Go get yourself some <strong>' + randomDessert + '</strong></p>');
		console.log('dessert');

		var modalClose = $('.modalClose');
		modalClose.click(function() {
			$('#dessertGenOutput').empty();
		})
	})
})

