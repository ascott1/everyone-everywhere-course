var form = document.getElementById('sign-up')
var submit = document.getElementById('submit')
var ul = document.getElementById('name-list')

var submitRequest = function(e) {
  e.preventDefault();

  var data = {
    'first': document.getElementById('first').value,
    'last': document.getElementById('last').value
  }

  xhr = new XMLHttpRequest()
  xhr.open('POST', '/names')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(data))

  appendNewItem(data)
}

var appendNewItem = function(name) {
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(name.first + ' ' + name.last))
  ul.appendChild(li)
  form.reset()
}

submit.addEventListener('click', submitRequest, false )
