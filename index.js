const switchTime = document.querySelector('.switch-items');
const currentHours = document.querySelectorAll('.current');
const previousHours = document.querySelectorAll('.previous')
const daily = document.getElementById('daily');
const monthly = document.getElementById('monthly')
const weekly = document.getElementById('weekly')

let c = console.log;

switchTime.addEventListener('click', (e)=> {
    
    if(e.target.tagName == 'LI'){
      
            let elems = document.querySelector(".active");
            if(elems !==null){
             elems.classList.remove("active");
            }
           e.target.classList.add('active');
          
    }
    if(daily.classList.contains('active')){
        dailyTimes()
    }
    else if(monthly.classList.contains('active')) {
        monthlyTimes()
    }
    else {
        weeklyTimes()
    }
    

})


function dailyTimes() {
    fetch('data.json').then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
    .then(response => response.json())
    .then(getData => {
        const objData = getData;
        
                for (let i = 0 ; i < currentHours.length ; i++) {
                    currentHours[i].innerHTML = `<h3 class="current-time"><span class="current-hours">${objData[i].timeframes.daily.current}</span>hrs</h3>`
                    previousHours[i].innerHTML = `<p class="previous-time">Yesterday - <span class="previous-hours">${objData[i].timeframes.daily.previous}</span>hrs</p>`
                }  
    })
}

function monthlyTimes() {
    fetch('data.json').then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
    .then(response => response.json())
    .then(getData => {
        const objData = getData;
            
                for (let i = 0 ; i < currentHours.length ; i++) {
                    currentHours[i].innerHTML = `<h3 class="current-time"><span class="current-hours">${objData[i].timeframes.monthly.current}</span>hrs</h3>`
                    previousHours[i].innerHTML = `<p class="previous-time">Last Month - <span class="previous-hours">${objData[i].timeframes.monthly.previous}</span>hrs</p>`
                }  
    })
}

function weeklyTimes() {
    fetch('data.json').then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
    .then(response => response.json())
    .then(getData => {
        const objData = getData;
    
                for (let i = 0 ; i < currentHours.length ; i++) {
                    currentHours[i].innerHTML = `<h3 class="current-time"><span class="current-hours">${objData[i].timeframes.weekly.current}</span>hrs</h3>`
                    previousHours[i].innerHTML = `<p class="previous-time">Last Week - <span class="previous-hours">${objData[i].timeframes.weekly.previous}</span>hrs</p>`
                }  
    })
}


