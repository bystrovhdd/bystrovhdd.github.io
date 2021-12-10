let btn = document.getElementById('btn')

const mainForm = document.forms.main
const mainFormSelectType = mainForm.type
const mainFormSelectDesign = mainForm.design
const mainFormSelectAdaptation = mainForm.adaptation
let mainFormSelectTypeValue
let mainFormSelectDesignValue
let mainFormSelectAdaptationValue

let devTime = document.getElementById('devTime')
let priceWork = document.getElementById('priceWork')

let time = [
    [2, 4, 12],
    [3, 1, 2],
    [1, 0]
]

let resultType = []
let resulteDesign = []
let resulteAdaptive = []

btn.addEventListener('click', function(){    
    if((mainFormSelectTypeValue = mainFormSelectType.value) == 10) {
        resultType = []
        resultType.push(2000, time[0][0])
    } else if((mainFormSelectTypeValue = mainFormSelectType.value) == 20) {
        resultType = []
        resultType.push(2500, time[0][1])
    } else if((mainFormSelectTypeValue = mainFormSelectType.value) == 30){
        resultType = []
        resultType.push(7000, time[0][2])
    } 
    
    if((mainFormSelectDesignValue = mainFormSelectDesign.value) == 10 ) {
        resulteDesign = []
        resulteDesign.push(3000, time[1][0])
    } else if((mainFormSelectDesignValue = mainFormSelectDesign.value) == 20 ) {
        resulteDesign = []
        resulteDesign.push(1000, time[1][1])
    } else if((mainFormSelectDesignValue = mainFormSelectDesign.value) == 30 ){
        resulteDesign = []
        resulteDesign.push(2200, time[1][2])
    }
    
    if((mainFormSelectAdaptationValue = mainFormSelectAdaptation.value) == 10) {
        resulteAdaptive = []
        resulteAdaptive.push(3000, time[2][0])
    } else if((mainFormSelectAdaptationValue = mainFormSelectAdaptation.value) == 20){
        resulteAdaptive = []
        resulteAdaptive.push(0, time[2][1])
    }
        
    
    devTime.textContent = resultType[1] + resulteDesign[1] + resulteAdaptive[1]
    priceWork.textContent = resultType[0] + resulteDesign[0] + resulteAdaptive[0]
})