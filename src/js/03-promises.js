import { Notify } from "notiflix";


const form = document.querySelector('.form');
  
form.addEventListener('submit', onBtn);

function onBtn(e) {
  e.preventDefault();
  
  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);
  

  setInterval(() => {
    if (position === amount) {
      return;
    }
    position += 1;
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
    delay += step;
  }
}


  // setInterval(() => {
  //   if (position >= amount) {
  //     return;
  //   }
  //   position += 1;
  //   setTimeout(() => {
  //     delay += step;
  //   });
   
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
 
    
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({position,delay})
      } else {
        reject(({ position, delay }));
      }, delay);
   
    });
    return promise;
  };

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });