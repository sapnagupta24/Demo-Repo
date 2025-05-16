// JavaScript for Pexel Clone Project

// Selectors
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const nameInput = document.querySelector('input[placeholder="Name"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const contactInput = document.querySelector('input[placeholder="Contact number"]');
const submitButton = document.querySelector('main button');
const navLinks = document.querySelectorAll('.container a');

// Search Functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query === "") {
        alert("Please enter a search term.");
    } else {
        console.log(`Searching for: ${query}`);
        searchInput.value = "";
    }
});

// Contact Form Validation
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const contact = contactInput.value.trim();

    if (!name || !email || !contact) {
        alert("All fields are required.");
        return;
    }

    if (!/^[a-zA-Z ]{2,30}$/.test(name)) {
        alert("Please enter a valid name.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        return;
    }

    console.log("Form Submitted:", { name, email, contact });
    alert("Form Submitted Successfully!");

    // Clear inputs
    nameInput.value = "";
    emailInput.value = "";
    contactInput.value = "";
});

// Navigation Link Click Animation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.style.color = "red";
        setTimeout(() => {
            link.style.color = "white";
        }, 300);
        console.log(`Navigating to: ${link.textContent}`);
    });
});
