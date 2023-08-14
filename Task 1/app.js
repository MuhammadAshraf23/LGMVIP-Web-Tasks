let input = document.getElementById('inputTask');
let toDoList = document.getElementById('list');

function addTodo() {
    let li = document.createElement('li');
    li.innerText = input.value;

    //------Edit--------------
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click', function() {
        let editTask = prompt("Enter new text");
        li.firstChild.textContent = editTask;
    });
    //------Delete--------------
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);  
    input.value = "";
  }
  //-------Delete All------------
  function DeleteAll() {
    list.innerHTML = "";
  }
  