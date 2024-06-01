document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#navbar a');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove active-link class from all links
            links.forEach(link => link.classList.remove('active-link'));
            // Add active-link class to the clicked link
            this.classList.add('active-link');
        });
    });

    // Retain underline on page reload
    const currentPath = window.location.pathname;
    links.forEach(link => {
        if (link.getAttribute('href') === `.${currentPath}`) {
            link.classList.add('active-link');
        }
    });
});