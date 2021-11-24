const type = prompt('Введите тип сайта(визитка +2000, лендинг +2500, интернет-магазин +7000)').trim().toLowerCase()
const design = prompt('Введите дизайн сайта(уникальный +3000, шаблонный +1000, flat +2200)').trim().toLowerCase()
const adaptive = prompt('Выберите вариант ответа(численный) с адаптацией сайта +3000 - 1  или без - 0 ').trim().toLowerCase()

let time = [
    [2, 4, 12],
    [3, 1, 2],
    [1, 0]
]

let resultType = []
let resulteDesign = []
let resulteAdaptive = []

function calculate(){    
    if(type === 'визитка') {
        resultType.push(2000, time[0][0])
    } else if(type === 'лендинг') {
        resultType.push(2500, time[0][1])
    } else {
        resultType.push(7000, time[0][2])
    }    
    
    if(design === 'уникальный') {
        resulteDesign.push(3000, time[1][0])
    } else if(design === 'шаблонный') {
        resulteDesign.push(1000, time[1][1])
    } else {
        resulteDesign.push(2200, time[1][2])
    }
    
    if(adaptive === '1') {
        resulteAdaptive.push('адаптивный', 3000, time[2][0])
    } else {
        resulteAdaptive.push('не адаптивный', 0, time[2][1])
    }
    
    let result = `Вы выбрали опции: ${type} ${design} ${resulteAdaptive[0]}, Срок разработки: ${resultType[1] + resulteDesign[1] + resulteAdaptive[2]} суток, Общая стоимость: ${resultType[0] + resulteDesign[0] + resulteAdaptive[1]}`
    return alert(result)
}

calculate()