document.addEventListener('DOMContentLoaded', function() {
    const btnScroll = document.querySelector('.btn');

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            btnScroll.classList.add('active');
        } else {
            btnScroll.classList.remove('active');
        }
    });

    // Smooth scroll to top when button is clicked
    btnScroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// 
// script.js
