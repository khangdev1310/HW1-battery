let percentage = document.querySelector('.percentage')
let percent = document.querySelector('.percent')

// Get capacity battery from computer
navigator.getBattery().then((battery) => {
  percentage.style.width = battery.level * 100 + '%'
  percent.innerHTML = parseInt(battery.level * 100) + '%'
})

let hec = document.querySelector('.head')
let sec = document.querySelector('.sec')
let toggle = document.querySelector('.toggle')
// toggle.onclick = () => {
//     sec.classList.toggle('dark')

// }

toggle.addEventListener('click', () => {
  sec.classList.toggle('dark')
  hec.classList.toggle('bg-dark')
})
