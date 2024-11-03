// 防抖函数
function debounce(func, wait) {
	let timeout;
	return function f(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args)
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait)
	}
}
(function() {
	// const axios = require("./axios")
	// $('.collapse').collapse()
	const nav = document.querySelectorAll('.nav-item')
	nav.forEach(item => {
		item.addEventListener('click', e => {
			document.querySelector('.active').classList.remove('active')
			e.target.classList.add('active')
		})
	})

	const hitokoto = document.querySelector('.hitokoto')
	async function Hitokoto() {
		const res = await axios({
			url: 'https://api.suyanw.cn/api/Ridicule.php?msg=5'
		})
		// console.log(res.data);
		document.querySelector('.hitokoto').innerHTML = res.data
	}
	Hitokoto()


	document.querySelectorAll('.kk-collapse ul li').forEach(item => {
		item.addEventListener('click', function(e) {
			// console.log(e.target.tagName);
			if (e.target.tagName === "I") {
				e.target.parentNode.nextElementSibling.classList.toggle(
					'kk-show')
				e.target.nextElementSibling.classList.toggle(
					'icon-down-show')
			}
			if (e.target.tagName === "LI") {
				e.target.children[1].classList.toggle('kk-show')
				e.target.children[0].children[1].classList.toggle('icon-down-show')
			}
			if (e.target.tagName === "H4") {
				e.target.nextElementSibling.classList.toggle('kk-show')
				e.target.children[1].classList.toggle('icon-down-show')
			}
			if (e.target.tagName === "EM") {
				e.target.parentNode.nextElementSibling.classList.toggle('kk-show')
				e.target.classList.toggle('icon-down-show')
			}
			// if (e.target.tagName === "P") {
			// 	e.target.classList.toggle('kk-show')
			// 	e.target.previousElementSibling.children[1].classList.toggle('icon-down-show')
			// }
			// e.target.children[3].classList.toggle('kk-show')
		})
	})




	document.querySelectorAll('.question .row ul li').forEach(item => {
		item.addEventListener('click', function(e) {
			if (e.target.tagName === "LI") {
				e.target.children[1].classList.toggle('kk-show')
				e.target.children[0].children[0].classList.toggle('icon-down-show')
			}
			if (e.target.tagName === "H4") {
				e.target.nextElementSibling.classList.toggle('kk-show')
				e.target.children[0].classList.toggle('icon-down-show')
			}
			if (e.target.tagName === "EM") {
				e.target.parentNode.nextElementSibling.classList.toggle('kk-show')
				e.target.classList.toggle('icon-down-show')
			}
		})
	})


	document.querySelector('.kk-button').addEventListener('click', function(e) {
		e.preventDefault()
		alert('对不起,你白填了 因为这里我还不会写')
	})

	document.querySelector('.Subscribe-button').addEventListener('click', function(e) {
		e.preventDefault()
		alert('说了不会写,你咋这么犟呢')
	})




	const bg_body = document.querySelector('.bg-body-tertiary')
	const about = document.querySelector('#about')
	window.addEventListener('scroll', debounce(function() {
		const htmlscrollTop = document.documentElement.scrollTop
		if (htmlscrollTop > about.offsetTop) {
			// console.log(htmlscrollTop);
			bg_body.classList.add('kknav-scrool')
		} else {
			// console.log(htmlscrollTop);
			bg_body.classList.remove('kknav-scrool')
		}
	}, 300))
})();

(function() {
	const interface_swiper = new Swiper(".interface-swiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		freeMode: true,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	// 监听点击事件
	interface_swiper.el.onclick = function(e) {
		// 如果点击的是图片
		if (e.target.parentNode.classList.contains(
				'swiper-slide')) {
			// 获取点击的slide的图片地址
			const imgSrc = e.target.src;

			// 显示大图
			const kk_modal = document.querySelector('#kk-modal');
			const img = document.querySelector('#enlarged-image');

			img.src = imgSrc;
			kk_modal.style.display = "block";


			document.addEventListener('click', e => {
				if (!e.target.parentNode.classList.contains(
						'swiper-slide') && e.target != img) {
					kk_modal.style.display = "none";
				}
			})
		}
	};

})();


(function() {
	window.addEventListener('scroll', debounce(function() {
		const old = document.querySelector('.active')
		if (old) old.classList.remove('active')

		const about = document.querySelector('#about')
		const develop = document.querySelector('#develop')
		const interface_s = document.querySelector('#interface')
		const vip = document.querySelector('#vip')
		const question = document.querySelector('#question')
		const download = document.querySelector('#download')

		const n = document.documentElement.scrollTop + 100
		if (n < about.offsetTop) {
			document.querySelector('[data-name="main"]').classList.add('active')
			document.querySelector('.btn-top a').style.opacity = 0
		}
		if (n >= about.offsetTop) {
			document.querySelector('.btn-top a').style.opacity = 1
		}
		if (n >= about.offsetTop && n < develop.offsetTop) {
			document.querySelector('[data-name="about"]').classList.add('active')
		} else if (n >= develop.offsetTop && n < interface_s.offsetTop) {
			document.querySelector('[data-name="develop"]').classList.add('active')
		} else if (n >= interface_s.offsetTop && n < vip.offsetTop) {
			document.querySelector('[data-name="interface"]').classList.add('active')
		} else if (n >= vip.offsetTop && n < question.offsetTop) {
			document.querySelector('[data-name="vip"]').classList.add('active')
		} else if (n >= question.offsetTop && n < download.offsetTop) {
			document.querySelector('[data-name="question"]').classList.add('active')
		} else if (n >= download.offsetTop) {
			document.querySelector('[data-name="download"]').classList.add('active')
		}
	}, 300))
	document.querySelector('.kk-year').innerHTML = new Date().getFullYear()
})();