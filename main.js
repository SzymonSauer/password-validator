const pass = document.querySelector('#password');
const info = document.querySelector('.message');
const numbers = /[0-9]/;
const letters = /[a-z]/i;
const special = /[!@#$%^&*()<>{}]/;
const minValue = 10;

const validatePassword = () => {
	if (
		pass.value.length >= minValue &&
		pass.value.match(numbers) &&
		pass.value.match(letters) &&
		pass.value.match(special)
	) {
		info.textContent = 'You have strong password! 💪';
		info.style.color = 'lime';
		info.style.visibility = 'visible';
	} else if (
		pass.value.length >= minValue &&
		pass.value.match(numbers) &&
		pass.value.match(letters)
	) {
		info.textContent = 'You have strong password. 🙂';
		info.style.color = 'gold';
		info.style.visibility = 'visible';
	} else {
		info.textContent = 'You have weak password! 😧';
		info.style.color = 'tomato';
		info.style.visibility = 'visible';
	}
};

const checkInput = () => {
	if (pass.value !== '') {
		validatePassword();
	} else {
		info.textContent = "You didn't enter your password.";
		info.style.color = 'grey';
		info.style.visibility = 'visible';
	}
};

pass.addEventListener('keyup', checkInput);
