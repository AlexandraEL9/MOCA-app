document.addEventListener("DOMContentLoaded", function() {
    // Initialize sidenav
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Initialize select elements
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // Get the height of the navbar
    let navbarHeight = document.querySelector('.nav-wrapper').offsetHeight;
    
    // Apply the height as top margin to sidenav
    sidenav.forEach(function(nav) {
        nav.style.marginTop = navbarHeight + 'px';
    });

    // Card actions
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

    // Add recipe steps
    let stepCount = 1;
    const instructionsContainer = document.getElementById("instructions-container");
    const addStepButton = document.getElementById("add-step");

    addStepButton.addEventListener("click", function() {
        stepCount++;
        const newStep = document.createElement("div");
        newStep.className = "row";
        newStep.innerHTML = `
            <div class="input-field col s12">
                <input type="text" name="instructions[]" id="instruction_step_${stepCount}" class="validate">
                <label for="instruction_step_${stepCount}">Step ${stepCount}</label>
            </div>
        `;
        instructionsContainer.appendChild(newStep);

        // Reinitialize the text fields for the new inputs
        M.updateTextFields();
    });

    // Add custom form validation to ensure at least one step is filled out
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const allSteps = document.querySelectorAll('input[name="instructions[]"]');
        
        // Check if at least one step has content
        let hasContent = Array.from(allSteps).some(input => input.value.trim() !== '');

        if (!hasContent) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill out at least one instruction step.");
        }
    });
});
