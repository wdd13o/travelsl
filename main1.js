document.querySelector('.tab-link').addEventListener('click', function(event) {
    if (this.getAttribute('href') === "terrorist.html") {
        window.location.href = 'terrorist.html'; // Redirect to the home page
    } else {
        event.preventDefault(); // Default action for other tabs
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
});