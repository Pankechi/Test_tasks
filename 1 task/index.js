const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
 return (seconds) => {
    setInterval(
      function() {
        let sec = seconds%60,
        min = seconds/60%60,
        hour = seconds/60/60%60;

        //Добавление формата 00:00:00
        if (sec < 10) {
          sec = "0" + Math.trunc(sec)
        };

        if (min < 10) {
          min = "0" + Math.trunc(min)
        } else {
          min = Math.trunc(min)
        };

        if (hour < 10) {
          hour = "0" + Math.trunc(hour)
        } else {
          hour = Math.trunc(hour)
        };

        if (seconds <= 0) {
          timerEl.innerText ='time out!' 
        } else {
          let time_animation = `${hour}:${min}:${sec}`
          timerEl.innerText = time_animation;
          --seconds
        } 
    }, 
    1000) 
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d,]/g,'')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
