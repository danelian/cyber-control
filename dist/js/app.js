	// -------------------- BURGER-MENU -------------------------
	const navMenu = document.getElementById('navMenu'),
			navToggle = document.getElementById('navToggle'),
			navClose = document.getElementById('navClose')
	if (navToggle) {
			navToggle.addEventListener('click', () => {
					navMenu.classList.add('show-menu')
			})
	}
	if (navClose) {
			navClose.addEventListener('click', () => {
					navMenu.classList.remove('show-menu')
			})
	}
	const navLink = document.querySelectorAll('.nav__link')
	const linkAction = () => {
			const navMenu = document.getElementById('nav-menu')
			navMenu.classList.remove('show-menu')
	}
	navLink.forEach(n => n.addEventListener('click', linkAction))



	// const accordionItems = document.querySelectorAll('.nav__list > li');
	// accordionItems.forEach(item => {
	// 	const accordionBtn = item.querySelector('.btn-reset');
	// 	const accordionContent = item.querySelector('.sub-menu');
	// 	accordionBtn.addEventListener('click', (event) => {
	// 		event.preventDefault();
	// 		accordionBtn.classList.toggle('active');
	// 		accordionContent.classList.toggle('active');
	// 	});
	// });

	// -------------------- BURGER-MENU NAV-ACCORDION -------------------------
	const accordionItems = document.querySelectorAll('.nav__list .menu-item-has-children')
	accordionItems.forEach((item) => {
			const accordionHeader = item.querySelector('.btn-reset')
			accordionHeader.addEventListener('click', () => {
					const openItem = document.querySelector('.accordion-open')
					toggleItem(item)
					if (openItem && openItem !== item) {
							toggleItem(openItem)
					}
			})
	})
	const toggleItem = (item) => {
			const accordionContent = item.querySelector('.sub-menu')
			if (item.classList.contains('accordion-open')) {
					accordionContent.removeAttribute('style')
					item.classList.remove('accordion-open')
			} else {
					accordionContent.style.height = accordionContent.scrollHeight + 'px'
					item.classList.add('accordion-open')
			}
	}