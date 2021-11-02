const changeBtn = document.querySelector('#change_user')
const userName = document.querySelector('#username');

if (!localStorage.getItem('username')) {
	userName.textContent = 'everyone';
} else {
	userName.textContent = localStorage.getItem('username');
}

function setUserName() {
	let yourName = prompt('Enter your name:');
	localStorage.setItem('username', yourName);
	userName.textContent = localStorage.getItem('username');
}

changeBtn.addEventListener('click', setUserName);
