/* eslint-disable no-undef */
var $car = document.getElementById('car');

var carData = {
  direction: 'east',
  location: {
    x: $car.x,
    y: $car.y
  },
  started: null
};

var carPosition = carData.location;
var carStart;

window.addEventListener('keydown', function (event) {
  var arrow = event.key;
  if (arrow === ' ' && carData.direction === 'east' && (carData.started === null || carData.started === false)) {
    carStart = setInterval(function () {
      carPosition.x += 10;
      $car.style.left = carPosition.x + 'px';
    }, 16);
    carData.started = true;
  } else if (arrow === ' ' && carData.direction === 'north' && (carData.started === null || carData.started === false)) {
    up();
    carData.started = true;
  } else if (arrow === ' ' && carData.direction === 'west' && (carData.started === null || carData.started === false)) {
    left();
    carData.started = true;
  } else if (arrow === ' ' && carData.direction === 'south' && (carData.started === null || carData.started === false)) {
    down();
    carData.started = true;
  } else if (arrow === ' ' && carData.started === true) {
    clearInterval(carStart);
    carData.started = false;
  } else if (arrow === 'ArrowUp' && carData.started === true) {
    clearInterval(carStart);
    $car.classList.remove('east', 'south', 'west');
    $car.classList.add('north');
    carData.direction = 'north';
    up();
  } else if (arrow === 'ArrowUp' && carData.started === false) {
    $car.classList.remove('east', 'south', 'west');
    $car.classList.add('north');
    carData.direction = 'north';
  } else if (arrow === 'ArrowRight' && carData.started === true) {
    clearInterval(carStart);
    $car.classList.remove('north', 'south', 'west');
    $car.classList.add('east');
    carData.direction = 'east';
    right();
  } else if (arrow === 'ArrowRight' && carData.started === false) {
    $car.classList.remove('north', 'south', 'west');
    $car.classList.add('east');
    carData.direction = 'east';
  } else if (arrow === 'ArrowDown' && carData.started === true) {
    clearInterval(carStart);
    $car.classList.remove('north', 'east', 'west');
    $car.classList.add('south');
    carData.direction = 'south';
    down();
  } else if (arrow === 'ArrowDown' && carData.started === false) {
    $car.classList.remove('east', 'north', 'west');
    $car.classList.add('south');
    carData.direction = 'south';
  } else if (arrow === 'ArrowLeft' && carData.started === true) {
    clearInterval(carStart);
    $car.classList.remove('north', 'south', 'east');
    $car.classList.add('west');
    carData.direction = 'west';
    left();
  } else if (arrow === 'ArrowLeft' && carData.started === false) {
    $car.classList.remove('north', 'south', 'west');
    $car.classList.add('west');
    carData.direction = 'west';
  }
});

function right() {
  carStart = setInterval(function () {
    carPosition.x += 10;
    $car.style.left = carPosition.x + 'px';
  }, 16);
}

function left() {
  carStart = setInterval(function () {
    carPosition.x -= 10;
    $car.style.left = carPosition.x + 'px';
  }, 16);
}

function up() {
  carStart = setInterval(function () {
    carPosition.y -= 10;
    $car.style.top = carPosition.y + 'px';
  }, 16);
}

function down() {
  carStart = setInterval(function () {
    carPosition.y += 10;
    $car.style.top = carPosition.y + 'px';
  }, 16);
}
