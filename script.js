
// Selecting the toggle button and the navigation menu
const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav ul li a');
toggleButton.addEventListener('click', () => {
    
    nav.classList.toggle('active');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        nav.classList.remove('active');
    });
});

