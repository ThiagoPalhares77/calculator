function insertElement(num) {
  var element = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = element + num
}

function clean() {
  document.getElementById('result').innerHTML = ''
}

function back() {
  var results = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = results.substring(
    0,
    results.length - 1
  )
}

function calc() {
  var results = document.getElementById('result').innerHTML
  if (results) {
    document.getElementById('result').innerHTML = eval(results)
  }
}
