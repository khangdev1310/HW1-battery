let percentage = document.querySelector('.percentage')
let percent = document.querySelector('.percent');

// Get capacity battery from computer
navigator.getBattery().then((battery) => {
    percentage.style.width = battery.level*100 + '%';
    percent.innerHTML = battery.level*100 + '%';

})