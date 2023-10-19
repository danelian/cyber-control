


	
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


	// -------------------- BURGER-MENU NAV-ACCORDION -------------------------
	const navlistItems = document.querySelectorAll('.nav__list .menu-item-has-children')
	navlistItems.forEach((navListItem) => {
			const navlistHeader = navListItem.querySelector('.btn-reset')
			navlistHeader.addEventListener('click', () => {
					const navListOpenItem = document.querySelector('.open-item')
					toggleNavlistItem(navListItem)
					if (navListOpenItem && navListOpenItem !== navListItem) {
							toggleNavlistItem(navListOpenItem)
					}
			})
	})
	const toggleNavlistItem = (navListItem) => {
			const navlistContent = navListItem.querySelector('.sub-menu')
			if (navListItem.classList.contains('open-item')) {
					navlistContent.removeAttribute('style')
					navListItem.classList.remove('open-item')
			} else {
					navlistContent.style.height = navlistContent.scrollHeight + 'px'
					navListItem.classList.add('open-item')
			}
	}


	// -------------------- PRODUCTS-ACCORDION -------------------------
	const productsItems = document.querySelectorAll('.products__a-item')
	productsItems.forEach((item) => {
		const productsHeader = item.querySelector('.products__a-header')
		productsHeader.addEventListener('click', () => {
			const openItem = document.querySelector('.open')
			toggleProductsItem(item)
			if (openItem && openItem !== item) {
				toggleProductsItem(openItem)
			}
		})
	})
	const toggleProductsItem = (item) => {
		const productsContent = item.querySelector('.products__a-content')
		if (item.classList.contains('open')) {
			productsContent.removeAttribute('style')
			item.classList.remove('open')
		} else {
			productsContent.style.height = productsContent.scrollHeight + 'px'
			item.classList.add('open')
		}
	}
	if (document.querySelector('.products__accordions')) {
		const firstItemContent = productsItems[0].querySelector('.products__a-content')
		firstItemContent.style.height = firstItemContent.scrollHeight + 'px'
		productsItems[0].classList.add('open')
	}

	
	// -------------------- SWIPER -------------------------
	var swiper = new Swiper(".singleSwiper", {
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		mousewheel: true,
	});