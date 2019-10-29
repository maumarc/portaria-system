// $('.header__nav__menu__item__link__img').on('click', function(){
// 	$('#header__bg').addClass('active')
// })
// $('.header__bg__form__close').on('click', function(){
// 	$('#header__bg').removeClass('active')
// })

var lupa = document.querySelector('.header__nav__menu__item__link__img');
var header = document.querySelector('#header__bg');

lupa.addEventListener('click', function(){
	header.classList.add('active');
})

document.querySelector('.header__bg__form__close').addEventListener('click', function(){
	header.classList.remove('active');
})


// $('.header__nav__menu__item__link__img').on('click', function(){
// 	$('#busca').addClass('active')
// 	event.preventDefault(); 
// })
// $('.fecharSearch').on('click', function(){
// 	$('#busca').removeClass('active')
// })

// $('.footer__ul__item__link__siteMap').on('click', function(){
// 	$('#siteMap').addClass('active')
// 	event.preventDefault(); 
// })
// $('.fecharSiteMap').on('click', function(){
// 	$('#siteMap').removeClass('active')
// })

// $('.nav-menu').on('mouseover', function(){
// 	$('.nav-menu-hidden').addClass('active')
// })
// $('.nav-menu').on('mouseout', function(){
// 	$('.nav-menu-hidden').removeClass('active')
// })