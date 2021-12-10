let delay_popup = 1000000000
let body = document.getElementById('body')
let close = document.querySelector('.close')

setTimeout(function(){
    document.getElementById('bg_popup').style.display='flex',
    body.classList.add('no-scroll')
}, delay_popup)

close.addEventListener('click', function(){
    body.classList.remove('no-scroll')
})


