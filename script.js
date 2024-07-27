// Select the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get user input values
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    // Here you can perform validation if needed
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate sending the form data (you would typically send this data to a server)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Optionally, you can clear the form fields after submission
    form.reset();
});
