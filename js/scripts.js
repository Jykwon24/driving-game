/* eslint-disable no-undef */
var $car = document.getElementById('car');

window.addEventListener('keydown', function (event) {
  var arrow = event.key;
  if (arrow === 'ArrowUp') {
    $car.classList.remove('east', 'south', 'west');
    $car.classList.add('north');
  } else if (arrow === 'ArrowRight') {
    $car.classList.remove('north', 'south', 'west');
    $car.classList.add('east');
  } else if (arrow === 'ArrowDown') {
    $car.classList.remove('north', 'east', 'west');
    $car.classList.add('south');
  } else if (arrow === 'ArrowLeft') {
    $car.classList.remove('north', 'south', 'east');
    $car.classList.add('west');
  }
});

var carPosition = 0;
var carStart;

window.addEventListener('keydown', function (event) {
  var space = event.key;
  if (space === ' ' && (carData.started === null || carData.started === false)) {
    carStart = setInterval(function () {
      carPosition += 10;
      $car.style.left = carPosition + 'px';
    }, 16);
    carData.started = true;
  } else if (carData.started === true) {
    clearInterval(carStart);
    carData.started = false;
  }
});
