$(document).ready(function(){

    let option = {threshold: [0.9]}
    let observer = new IntersectionObserver(onInput, option)
    let element = $('.about__img')
    element.each((i, l) => {
        observer.observe(l)
    })



    let setting = {threshold: [0.5]}
    let iserver = new IntersectionObserver(on, setting)
    let el = $('.img__slide')
    el.each((i, s) => {
        iserver.observe(s)
    })




})

function on(input){
    input.forEach(change => {
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src
            console.log(change.isIntersecting)
        }
    })
}

function onInput(input){
    input.forEach(change => {
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src
            console.log(change.isIntersecting)
        }
    })
}