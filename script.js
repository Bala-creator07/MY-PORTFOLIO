document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(sec => sec.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding section
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Form Submission Logic
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const targetEmail = "balahariharanb07@gmail.com";
            const subject = encodeURIComponent(`Portfolio Contact Request from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            // Open user's default mail client
            window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
            
            // Optional: reset form
            contactForm.reset();
        });
    }
});
