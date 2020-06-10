const form = document.getElementById('subs-form');
const email = document.getElementById('id-email');
const contactForm = document.getElementById('contactForm');

// const Name = document.getElementById('Name');
// const Subject = document.getElementById('Subject');
// const Email = document.getElementById('Email');
// const Telephone = document.getElementById('Telephone');
// const Textarea = document.getElementById('Textarea');

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input, 'Email is valid, Yay');
	} else {
		showError(input, 'Email is not valid');
	}
}

function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Get fieldname
function getFieldName(input) {
	let getinput = input.id.charAt(0).toUpperCase() + input.id.slice(1);
	return getinput;
}

// Event listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();
	checkEmail(email);
});

// contactForm.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	checkRequired([Name, Subject, Email, Telephone, Textarea]);
// });
