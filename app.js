// Get Result 
const result = document.querySelector('#result');

// Fire on input change
input.oninput = function() {
	// Define Maestro prefixes
	const maestro = [5018, 5020, 5038, 5612, 5893, 6304, 6759, 6761, 6762, 6763, 0604, 6390];

	// Typed more than 3 characters
	if (input.value.length > 3) {

		// Grab the input value
		const str = input.value;
		// Grab the first four characters
		const strFirstFour = str.substring(0,4);
		// Convert string to number
		const numbers = parseInt(strFirstFour);

		// Check if numbers exist in maestro array
		if ( maestro.indexOf(numbers) > -1 ) {
			// Change HTML (link in your case)
			result.innerHTML = 'Maestro!';
		};

	} 

	// User has not typed enough numbers to match against
	else{
		result.innerHTML = 'Type some more...';
	}
	
};