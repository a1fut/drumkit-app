const addBtn = document.getElementById('addInfo')
const popupWidow = document.querySelector('.popupWindow')
const submitBtn = document.getElementById('submit')

addBtn.addEventListener('click', function(){
    if(popupWidow.classList.length === 1){
        popupWidow.classList.add('active')
    }else{
         popupWidow.classList.remove('active')
    }   
} )

document.querySelector('.closeBtn').addEventListener('click', function(){
    popupWidow.classList.remove('active')
})

// Chart

submitBtn.addEventListener('click', function(){
    myChart.data.datasets.forEach((datasets) => {
        datasets.data.push(document.getElementById("weight").value)
    });
    // console.log(weight)
    myChart.options.title.text = document.getElementById('name').value
    myChart.data.labels.push(document.getElementById('exercise').value)
    myChart.update()
})

let resultChart = document.getElementById('resultChart').getContext('2d')



let myChart = new Chart(resultChart, {
    type: 'bar',
    data:{
        labels:[],
        datasets:[{
            label:'Ciężar',
            data: [],
            backgroundColor:'lightgreen'
        }]
    },
    options:{
        title:{
            display:true,
            text: '',
        }
    },
}) 