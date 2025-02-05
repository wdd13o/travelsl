document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    // Toggle the navigation menu on click
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filters button');
    const destinationCards = document.querySelectorAll('.destination-card');


    
    // Show all destinations by default
    showAllDestinations();

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            if (filter === 'all') {
                showAllDestinations();
            } else {
                filterDestinations(filter);
            }
        });
    });

    function showAllDestinations() {
        destinationCards.forEach(card => {
            card.style.display = 'block';
        });
    }

    function filterDestinations(category) {
        destinationCards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});




document.addEventListener('DOMContentLoaded', function () {
    // Filter Destinations
    const Filters = document.querySelectorAll('#destinations .filters button');
    const destinationCards = document.querySelectorAll('#destinations .destination-card');

    destinationFilters.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            destinationFilters.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter destination cards
            destinationCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Filter Things To Do
    const thingCards = document.querySelectorAll('#things-to-do .thing-card');
    const thingLinks = document.querySelectorAll('#things-to-do .sub-nav a');

    thingLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('href').replace('#', '');

            // Filter things to do cards
            thingCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Filter Plan Your Trip
    const tripCards = document.querySelectorAll('#plan-your-trip .trip-card');
    const tripLinks = document.querySelectorAll('#plan-your-trip .sub-nav a');

    tripLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('href').replace('#', '');

            // Filter trip cards
            tripCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});







// Function to update the footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Update Year & DateTime
function updateDateTime() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("datetime").textContent = new Date().toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Newsletter Subscription
function subscribe() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("subscribe-message");

    if (email.includes("@") && email.includes(".")) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
    }
}


