// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';


const refs ={
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    timerEl: document.querySelector('.timer'),
    daysSpan: document.querySelector('span[data-days]'),
    hoursSpan: document.querySelector('span[data-hours]'),
    minutesSpan: document.querySelector('span[data-minutes]'),
    secondsSpan: document.querySelector('span[data-seconds]'),

};
    


const {input,startBtn,timerEl,daysSpan,hoursSpan,minutesSpan,secondsSpan}= refs;
console.log(timerEl);
let useDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    const currentDate = this.config.defaultDate.getTime();
    if (currentDate > selectedDate) {
      alert('Please choose a date in the future');
      return;
    }
    startBtn.removeAttribute('disabled');
  }, 
};
  
flatpickr('input[type="text"]', options);
startBtn.disabled = true;

startBtn.addEventListener('click', () => {
    timer.start();
});

class Timer  {

    constructor(){
        this.isActive = false;
        this.setInterval = null;
        this.btnStartRef.disabled = true;  
               
    }
    

    start() {
        if (this.isActive) {
            return;
        }
        
        const startTime = Date.now();
        this.isActive = true;

        this.setInterval = setInterval(() => {
        const currentTime = new Date();
        const deltaTime = useDate - currentTime;
            // console.log(deltaTime);
        const timeComponents = convertMs(deltaTime);
            // console.log(timeComponents );

        daysSpan.textContent = element.days;
      hoursSpan.textContent = element.hours;
      minutesSpan.textContent = element.minutes;
      secondsSpan.textContent = element.seconds;
 

            if (deltaTime < 0) { 
        this.stop();
        timer.innerHTML = 'Time is over!';
      }
        }, 1000);
    }
        stop(){
            clearInterval(this.timeComponents);
            this.isActive = folse;
           
        }
 
};

timer.start()

const timer = new Timer({
    onTick: updateClocck,
});

flatpickr(inputRef, options)
const timer = new Timer();
btnStartRef.addEventListener('click', () => timer.start())

// function updateClocck({ days, hours, minutes, seconds }) {
//       daysSpan.textContent = element.days;
//       hoursSpan.textContent = element.hours;
//       minutesSpan.textContent = element.minutes;
//       secondsSpan.textContent = element.seconds;
// }
// class Timer = {

//   isActive: false,

      
// stop() {
//     if (this.isActive)
//     {return
// ;}
 
//     const stopTime = Date.now();
//     this.isActive = true;
//     setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = currentTime - stopTime;
//         const { days, hours, minutes, seconds } = convertMs(ms);
//     }, 1000);

//   }
//  }

//  class Timer { 
//   constructor() { 
//     this.isActive = false;
//     this.timerId = null;
//     btnStartRef.disabled = true;
//   }

//   stop() { 
//     if (this.isActive) { 
//       return;
//     }
//     this.isActive = true;
//     this.timerId = setInterval(() => {
//       const currentTime = new Date();
//       const deltaTime = useDate - currentTime;
//       const element = convertMs(deltaTime);

//        daysSpan.textContent = element.days;
//       hoursSpan.textContent = element.hours;
//       minutesSpan.textContent = element.minutes;
//       secondsSpan.textContent = element.seconds;
      
//        if (deltaTime < 0) { 
//         this.stop();
//         timer.innerHTML = 'Time is over!';
//       }
//     }, 1000);

//   };
//   init() {
//     const time = this.convertMs(0);
//     this.onTick(time);
//     };


// function addLeadingZero(value) { }

 
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds }
};

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function pad(value) {
    return String(value).padStart(2, '0')
};
