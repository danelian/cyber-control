	// -------------------- BURGER-MENU -------------------------
	const navMenu = document.getElementById('navMenu'),
			navToggle = document.getElementById('navToggle'),
			navClose = document.getElementById('navClose')
	if (navToggle) {
			navToggle.addEventListener('click', () => {
					navMenu.classList.add('show-menu')
					document.querySelector('body').classList.add('dis-scroll')
			})
	}
	if (navClose) {
			navClose.addEventListener('click', () => {
					navMenu.classList.remove('show-menu')
					document.querySelector('body').classList.remove('dis-scroll')
			})
	}
	const navLink = document.querySelectorAll('.nav__link')
	const linkAction = () => {
			const navMenu = document.getElementById('nav-menu')
			navMenu.classList.remove('show-menu')
			document.querySelector('body').classList.remove('dis-scroll')
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
  if (window.innerWidth >= 1025) { 
		var swiper = new Swiper(".singleSwiper", {
			direction: "vertical",
			slidesPerView: "auto",
			freeMode: true,
			scrollbar: {
				el: ".swiper-scrollbar",
			},
			mousewheel: true,
		});
	}
	var projectsSwiper = new Swiper(".projectsSwiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
	var projectSwiper = new Swiper(".projectSwiper", {
		slidesPerView: 4,
		spaceBetween: 24,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
			1280: {
				slidesPerView: 4,
			},
		}
	});