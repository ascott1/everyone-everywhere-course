var form = document.getElementById('sign-up')
var submit = document.getElementById('submit')
var ul = document.getElementById('name-list')

var submitRequest = function(e) {
  e.preventDefault();

  var data = {
    'name': document.getElementById('full-name').value
  }

  xhr = new XMLHttpRequest()
  xhr.open('POST', '/names')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(data))

  appendNewItem(data)
}

var appendNewItem = function(data) {
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(data.name))
  ul.appendChild(li)
  form.reset()
}

submit.addEventListener('click', submitRequest, false )
