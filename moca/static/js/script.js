/* global M */
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
	//toggle method adapted from learning on https://rails.devcamp.com/trails/javascript-in-the-browser/campsites/javascript-dom/guides/how-to-use-javascript-s-toggle-function
	function setupCardActions() {
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

	// Add recipe steps functionality
	// inspired by Tim Nelson's desert project (https://chatgpt.com/c/48e50280-939d-4932-838d-a758904730a8)) and work through utilizing chat gpt
	function setupAddStepFunctionality() {
		let stepCount = document.querySelectorAll('input[name="instructions[]"]').length; // Initialize step count
		const instructionsContainer = document.getElementById("instructions-container");
		const addStepButton = document.getElementById("add-step-btn");

		addStepButton.addEventListener("click", function() {
			stepCount++;
			const newStep = `
				<div class="row">
					<div class="input-field col s12">
						<input type="text" name="instructions[]" id="instruction_step_${stepCount}" class="validate" required>
						<label for="instruction_step_${stepCount}">Step ${stepCount}</label>
					</div>
				</div>
			`;
			instructionsContainer.insertAdjacentHTML('beforeend', newStep);

			// Reinitialize Materialize text fields for the new input fields
			M.updateTextFields();
		});
	}

	// Custom form validation
	function setupFormValidation() {
		const form = document.querySelector("form");
		form.addEventListener("submit", function(event) {
			const allSteps = document.querySelectorAll('input[name="instructions[]"]');
	
			// Check if at least one step has content only on form submission
			let hasContent = Array.from(allSteps).some(input => input.value.trim() !== '');
	
			if (!hasContent) {
				event.preventDefault(); // Prevent form submission
				alert("Please fill out at least one instruction step.");
			} else {
				// Concatenate the steps and store in hidden textarea
				let instructionsText = Array.from(allSteps).map(field => field.value).join('\n');
				document.getElementById('instructions-hidden').value = instructionsText;
			}
		});
	}
	

	// Initialize all functionalities
	function init() {
		initializeMaterializeComponents();
		adjustSidenavMargin();
		setupCardActions();
		setupFlashMessageCloseButtons();
		setupAddStepFunctionality();
		setupFormValidation();
	}

	init();
});
