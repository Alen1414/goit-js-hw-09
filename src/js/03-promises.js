import { Notify } from "notiflix";


const form = document.querySelector('.form');
  
form.addEventListener('submit', onBtn);

function onBtn(e) {
  e.preventDefault();
  
  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);
  

  for (let position = 0; position === amount; position += 1)
  {
    createPromise(position, delay)
      .then(({ position,delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay)
      })
      .catch(({ position, delay }) => {
        setTimeout(() => { 
           Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        },delay)
      });
    // delay += step;
  }
}

   
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
 
    
    return new Promise((resolve, reject) => {
     
      if (shouldResolve) {
        resolve({position,delay})
      } else {
        reject({position,delay})
      }
    })
    
}
createPromise( )
// if (Math.round(delayTime / 1000) === 0) {
//   console.log('Отсчет окончен');
//   return;
// }