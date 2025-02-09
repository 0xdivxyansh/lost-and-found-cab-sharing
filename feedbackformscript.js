document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;
    const message = document.getElementById('message').value;

    // Display data
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayType').textContent = type;
    document.getElementById('displayMessage').textContent = message;
    document.getElementById('submittedData').style.display = 'block';

    // Show alert
    alert('Submitted Successfully');
});