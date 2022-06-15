const toggle = document.querySelector('.menu-toggle')
const close = document.querySelector('.close')
const wrapper = document.querySelector('.wrapper')

toggle.addEventListener('click', function(){
	wrapper.classList.toggle('active')
})

close.addEventListener('click', function(){
	wrapper.classList.toggle('active')
})