
const $response = document.getElementById('response')
const $form = document.getElementById('form')
const $day = document.getElementById('day')
const $month = document.getElementById('month')
const $year = document.getElementById('year')


const DateTime = luxon.DateTime.local();
//DateTime.local().setZone('America/New_York').minus({ weeks: 1 }).endOf('day').toISO();

const year = []
  for (let i = 2020; i < 2030; i++){
    year.push(`<option>${i}</option>`)
  }
  $year.innerHTML = year.join('')
  


const month = []
  for (let i = 1; i < 13; i++){
    month.push(`<option>${i}</option>`)
  }
  $month.innerHTML = month.join('')
//   month.value = now.month


  const day = []
  for (let i = 1; i < 32; i++){
    day.push(`<option>${i}</option>`)
  }
  $day.innerHTML = day.join('')
 
//set timer interval 

const $timer = document.getElementById('btn')

let targetDate = {
    hours: 23,
    minutes: 59,
    seconds: 59
}

setInterval(function (){
    targetDate.seconds -= 1

    $timer.innerHTML =`
    ${targetDate.hours} hours
    ${targetDate.minutes} minutes
    ${targetDate.seconds} seconds


    `
}, 1000);

