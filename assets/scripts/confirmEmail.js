const bookingForm = document.getElementById("booking-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform custom validation logic
    const email = document.getElementById('email').value;
    const emailConfirm = document.getElementById('emailConfirm').value;
	const { email, emailConfirm } = bookingForm.elements;
 
    // if (!email.value.trim() || !isValidEmail(email.value)) {
      // displayError("Please enter a valid email address.");
      // return;
    // }

	if (!email.value.trim() || !isValidEmail(email.value)) {
      displayError("Please enter a valid email address.");
        return;
    }
	
	if (!emailConfirm.value.trim() || !isValidEmail(emailConfirm.value)) {
      displayError("Please enter a valid email address.");
        return;
    }
	
	if(email.value != emailConfirm.value) {
		displayError("Please confirm your Email Address!");
		return;
	}
	
    // If validation passes, submit the form
	alert("Booking Successful!");
    bookingForm.reset();
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
