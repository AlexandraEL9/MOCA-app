//mobile side nav initialisation
document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

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
});