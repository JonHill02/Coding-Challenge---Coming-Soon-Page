const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('error');

emailForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        errorMessage.style.visibility = 'visible';
    } else {
        errorMessage.style.visibility = 'hidden';
        // Add your form submission logic here
        alert('Thank you! You will be notified soon.');
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
