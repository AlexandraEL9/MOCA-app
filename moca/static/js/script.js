//mobile side nav initialisation
document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Get the height of the navbar
    let navbarHeight = document.querySelector('.nav-wrapper').offsetHeight;
    
    // Apply the height as top margin to sidenav
    sidenav.forEach(function(nav) {
        nav.style.marginTop = navbarHeight + 'px';
    });
    
    // select initialization
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
});

//card actions
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for the reveal icons
    const revealIcons = document.querySelectorAll('.card-image .btn-floating');
    const closeIcons = document.querySelectorAll('.card-reveal .fa-times-circle');
    
    revealIcons.forEach((icon) => {
        icon.addEventListener('click', function() {
            const card = icon.closest('.card');
            card.classList.toggle('active');
        });
    });

    closeIcons.forEach((icon) => {
        icon.addEventListener('click', function() {
            const card = icon.closest('.card');
            card.classList.toggle('active');
        });
    });

    // Close button functionality for flash messages
    document.querySelectorAll('.flash-message .close-btn').forEach(button => {
        button.addEventListener('click', function() {
            const flashMessage = button.closest('.flash-message');
            flashMessage.style.display = 'none';
        });
    });
});
