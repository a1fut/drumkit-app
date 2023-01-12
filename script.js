const addBtn = document.getElementById('addInfo')
const popupWidow = document.querySelector('.popupWindow')

addBtn.addEventListener('click', function(){
    if(popupWidow.classList.length === 1){
        popupWidow.classList.add('active')
    }else{
         popupWidow.classList.remove('active')
    }   
} )

let resultChart = document.getElementById('resultChart').getContext('2d')

let myChart = new Chart(resultChart, {
    type: 'bar',
    data:{
        labels:['Nazwa cwiczenia','Nazwa cwiczenia 2','Nazwa cwiczenia 4'],
        datasets:[{
            label:'Ciężar',
            data:[123, 150, 200],
            backgroundColor:'lightgreen'
        }]
    },
    options:{},
}) 