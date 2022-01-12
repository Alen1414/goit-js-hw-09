
const refs ={
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),

};
const {startBtn,stopBtn,body}=refs;
startBtn.disabled = false;
stopBtn.disabled = false;


let colorSwitch = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function changeColorBody() { 
    body.style.backgroundColor = getRandomHexColor()
  };

startBtn.addEventListener('click',startColors);
stopBtn.addEventListener('click',stopColor);


  function startColors() { 
    startBtn.disabled = true;
    stopBtn.disabled = false;
    colorSwitch = setInterval(changeColorBody,1000)
  };
  
  function stopColor() { 
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(colorSwitch);
  };



 

  
