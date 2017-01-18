document.addEventListener('DOMContentLoaded', function(event) {
  init();
});

function init () {
  window.value = {score: 0};
  window.value.history = [];
  document.getElementById('score').innerHTML = '$0';
  document.getElementById('single-jeopardy').style.display = 'block';
  document.getElementById('double-jeopardy').style.display = 'none';
  document.getElementById('daily-double-input').style.display = 'none';
  document.getElementById('toggleDouble').innerHTML = 'Double Jeopardy';
  document.getElementById('footer').style.display = 'block';
}

function addScore (points) {
  window.value.score += parseInt(points);
  window.value.history.push(points);
  console.log(window.value);
  document.getElementById('score').innerHTML = '$' + window.value.score;
}

// function undo () {
//   window.value.history
// }

function toggleDoubleJeopardy () {
  var single = document.getElementById('single-jeopardy').style.display;
  var double = document.getElementById('double-jeopardy').style.display;

  if (_toggleShow(single) && _toggleHide(double)) {
    document.getElementById('single-jeopardy').style.display = 'none';
    document.getElementById('double-jeopardy').style.display = 'block';
    document.getElementById('toggleDouble').innerHTML = 'Single Jeopardy';
  }
  if (_toggleHide(single) && _toggleShow(double)) {
    document.getElementById('single-jeopardy').style.display = 'block';
    document.getElementById('double-jeopardy').style.display = 'none';
    document.getElementById('toggleDouble').innerHTML = 'Double Jeopardy';
  }
}

function toggleDailyDouble () {
  var daily = document.getElementById('daily-double-input').style.display;
  if (_toggleShow(daily)) {
    document.getElementById('daily-double-input').style.display = 'none';
    document.getElementById('footer').style.display = 'block';
  }

  if (_toggleHide(daily)) {
    document.getElementById('daily-double-input').style.display = 'block';
    document.getElementById('footer').style.display = 'none';
  }
}

function _toggleShow (style) {
  return style === 'block';
}

function _toggleHide (style) {
  return style === 'none';
}
