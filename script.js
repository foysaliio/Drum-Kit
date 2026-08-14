'use strict';

const drums = document.querySelectorAll('.drum');

function playSound(key) {
  let audio;

  switch (key) {
    case 'w':
      audio = new Audio('./sounds/tom-1.mp3');
      break;

    case 'a':
      audio = new Audio('./sounds/tom-2.mp3');
      break;

    case 's':
      audio = new Audio('./sounds/tom-3.mp3');
      break;

    case 'd':
      audio = new Audio('./sounds/tom-4.mp3');
      break;

    case 'j':
      audio = new Audio('./sounds/snare.mp3');
      break;

    case 'k':
      audio = new Audio('./sounds/crash.mp3');
      break;

    case 'l':
      audio = new Audio('./sounds/kick-bass.mp3');
      break;

    default:
      return;
  }

  audio.play();
}

function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);

  if (!activeButton) return;

  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
}

drums.forEach(drum => {
  drum.addEventListener('click', () => {
    const key = drum.innerHTML.toLowerCase();

    playSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener('keydown', event => {
  const key = event.key.toLowerCase();

  playSound(key);
  buttonAnimation(key);
});
