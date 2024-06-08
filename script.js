const navButton = document.querySelector('.nav-button');
const navList = navButton.querySelector('ul');

navButton.addEventListener('click', () => {
	navList.classList.toggle('open');
});

navList.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') {
		const href = e.target.getAttribute('href');
		const section = document.querySelector(href);
		section.scrollIntoView({ behavior: 'smooth' });
	}
});