let first = document.querySelector('.firstNumber')
let second = document.querySelector('.secondNumber')
let third = document.querySelector('.thirdNumber')
let fourth = document.querySelector('.fourthNumber')
	
let interval = setInterval(function(){
	if(first.textContent >= 120) {
		clearInterval(interval)
} else {
	first.textContent++
}
}, 45)

let interval2 = setInterval(function(){
	if(second.textContent >= 4600) {
		clearInterval(interval2)
} else {
	second.textContent++
	second.textContent++
	second.textContent++
	second.textContent++
}
}, 1)

let interval3 = setInterval(function(){
	if(third.textContent >= 320) {
		clearInterval(interval3)
} else {
	third.textContent++
}
}, 18)

let interval4 = setInterval(function(){
	if(fourth.textContent >= 23) {
		clearInterval(interval4)
} else {
	fourth.textContent++
}
}, 270)


