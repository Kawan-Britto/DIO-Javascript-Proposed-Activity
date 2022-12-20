/* 
Usuário escreve a tarefa no input;
Usuário aperta o botão;
Script vai pegar o que está dentro do input;
Script cria um novo espaço de texto;
Script escreve o que está dentro do input;
*/

const $to_do_button = document.querySelector('#to_do_button');
$to_do_button.addEventListener('click', adcToDo);

function adcToDo() {
  const toDoList = document.querySelector('.tarefas');

  var $tarefa = document.querySelector('#tarefa').value;

  const newTask = document.createElement('p');
  newTask.innerHTML = $tarefa;

  console.log(newTask);

  toDoList.appendChild(newTask);
}
