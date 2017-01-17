document.addEventListener('DOMContentLoaded', function(event) {
  init();
  // getScore(points);
});

function init () {
  window.value = 0;
  document.getElementById('score').innerHTML = 0;
  document.getElementById('single-jeopardy').style.display = 'block';
  document.getElementById('double-jeopardy').style.display = 'none';
  document.getElementById('daily-double-input').style.display = 'none';
  document.getElementById('toggleDouble').innerHTML = 'Double Jeopardy';
}

function addScore (points) {
  window.value += parseInt(points);
  document.getElementById('score').innerHTML = window.value;
}

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
  }

  if (_toggleHide(daily)) {
    document.getElementById('daily-double-input').style.display = 'block';
  }
}

function _toggleShow (style) {
  return style === 'block';
}

function _toggleHide (style) {
  return style === 'none';
}
