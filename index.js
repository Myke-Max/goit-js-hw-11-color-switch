const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
}

let intervalID = null;
let isActive = false;

const onChangeBgc = () => {
    if (!isActive) {
        isActive = true
        intervalID = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length -1)]
        }, 1000)
    }
    
}

const stopChangeBgc = () => {
    clearInterval(intervalID)
    document.body.style.backgroundColor = '#fff'
    isActive = false
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onChangeBgc);
refs.stopBtn.addEventListener('click', stopChangeBgc);

