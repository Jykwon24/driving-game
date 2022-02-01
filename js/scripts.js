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
