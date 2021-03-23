// assign base variables
let rval = 0
let uval = 0
// random number generator
rval = Math.floor(Math.random() * 6)
rval = rval + 1
// detects button press
document.getElementById('button').addEventListener('click', function1)
document.getElementById('restart').addEventListener('click', restart)
document.getElementById('text').innerHTML = rval
// functions
function function1 () {
uval = document.getElementById('input').value
uval = parseInt(uval)
if (uval == rval) {
  alert('you guessed corectly! the number has been reset')
  restart ()
}
if (uval != rval) {
  alert('you guessed incorectly ;(')
}
}
function restart () {
  window.location.href = 'https://icsor-7-01-html.victorphillips1.repl.co/'
}
