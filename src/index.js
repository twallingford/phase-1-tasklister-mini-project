function buildTodo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let priority = document.querySelector('#priority')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  if(priority.value === 'high'){
    p.style.color = '#FF0000'
  }
  else if(priority.value === 'medium'){
    p.style.color = '#FFFF00'
  }
  else if(priority.value === 'low'){
    p.style.color = '#00FF00'
  }
  p.appendChild(btn)
  document.querySelector("#list").appendChild(p)

}

function handleDelete(e){
  e.target.parentNode.remove()
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  buildTodo(document.getElementById('new-task-description').value)
  document.querySelector('#create-task-form').reset()
})