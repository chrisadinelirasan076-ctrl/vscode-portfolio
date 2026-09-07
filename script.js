// Navigation functionality
document.querySelectorAll('.nav-item, .tab').forEach(item => {
    item.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        showSection(section);
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from nav items and tabs
    document.querySelectorAll('.nav-item, .tab').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to corresponding nav items and tabs
    document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(item => {
        item.classList.add('active');
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add some interactivity - highlight code on hover
document.querySelectorAll('.code-block').forEach(block => {
    block.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
});