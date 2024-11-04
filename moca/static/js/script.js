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
			
			// Call image validation function
			if (!validateImageUpload(event)) {
				event.preventDefault(); // Prevent form submission if image validation fails
			}
		});
	}

	// Validate image upload
	function validateImageUpload(event) {
		const fileInput = document.getElementById('image_file');
		const filePath = fileInput.value;
		const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

		if (!fileInput.files.length || !allowedExtensions.exec(filePath)) {
			alert('Please upload a file with a valid image format (jpg, jpeg, png, gif).');
			fileInput.value = ''; // Clear the input
			return false; // Indicate validation failure
		}
		return true; // Indicate validation success
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

