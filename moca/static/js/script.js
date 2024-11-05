document.addEventListener("DOMContentLoaded", function() {
	// Initialize Materialize components
	function initializeMaterializeComponents() {
		let sidenav = document.querySelectorAll(".sidenav");
		M.Sidenav.init(sidenav);

		let selects = document.querySelectorAll("select");
		M.FormSelect.init(selects);
	}

	// Adjust sidenav margin based on navbar height
	function adjustSidenavMargin() {
		let navbarHeight = document.querySelector('.nav-wrapper').offsetHeight;
		let sidenav = document.querySelectorAll(".sidenav");

		sidenav.forEach(function(nav) {
			nav.style.marginTop = navbarHeight + 'px';
		});
	}

	// Toggle card visibility
	function setupCardActions() {
		const revealIcons = document.querySelectorAll('.card-image .btn-floating');
		const closeIcons = document.querySelectorAll('.card-reveal .fa-times-circle');

		revealIcons.forEach((icon) => {
			icon.addEventListener('click', function() {
				icon.closest('.card').classList.toggle('active');
			});
		});

		closeIcons.forEach((icon) => {
			icon.addEventListener('click', function() {
				icon.closest('.card').classList.toggle('active');
			});
		});
	}

	// Close flash messages
	function setupFlashMessageCloseButtons() {
		document.querySelectorAll('.flash-message .close-btn').forEach(button => {
			button.addEventListener('click', function() {
				const flashMessage = button.closest('.flash-message');
				flashMessage.style.display = 'none';
			});
		});
	}

	// Updated dynamic step addition to also update hidden textareas
		function setupDynamicStepAddition(containerId, inputName, buttonId, stepLabel) {
			let stepCount = document.querySelectorAll(`input[name="${inputName}"]`).length;

			document.getElementById(buttonId).addEventListener('click', function() {
				stepCount++;
				const newStep = `
					<div class="row">
						<div class="input-field col s12">
							<input type="text" name="${inputName}" id="${inputName}_step_${stepCount}" class="validate" required>
							<label for="${inputName}_step_${stepCount}">${stepLabel} ${stepCount}</label>
						</div>
					</div>
				`;
				document.getElementById(containerId).insertAdjacentHTML('beforeend', newStep);
				M.updateTextFields(); // Reinitialize Materialize text fields for new inputs
			});
		}


	// Custom form validation
	function setupFormValidation() {
		const form = document.querySelector("form");
		form.addEventListener("submit", function(event) {
			const allInstructions = document.querySelectorAll('input[name="instructions[]"]');
			const allIngredients = document.querySelectorAll('input[name="ingredients[]"]');
	
			// Check if at least one step has content
			let hasContent = Array.from(allInstructions).some(input => input.value.trim() !== '') ||
                             Array.from(allIngredients).some(input => input.value.trim() !== '');

			if (!hasContent) {
				event.preventDefault();
				alert("Please fill out at least one instruction or ingredient step.");
			} else {
				// Concatenate the steps and store in hidden textarea
				let instructionsText = Array.from(allInstructions).map(field => field.value).join('\n');
				let ingredientsText = Array.from(allIngredients).map(field => field.value).join(', ');
				document.getElementById('instructions-hidden').value = `Ingredients: ${ingredientsText}\nInstructions: ${instructionsText}`;
			}
		});
	}

	// Initialize all functionalities
	function init() {
		initializeMaterializeComponents();
		adjustSidenavMargin();
		setupCardActions();
		setupFlashMessageCloseButtons();
		setupDynamicStepAddition("ingredients-container", "ingredients[]", "add-ingredient-btn", "Ingredient");
    	setupDynamicStepAddition("instructions-container", "instructions[]", "add-step-btn", "Step");
		setupFormValidation();
	}

	init();
});
