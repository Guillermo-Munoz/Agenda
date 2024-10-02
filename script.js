//Info date
const dateNumber = document.getElementById('date-number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const text = document.getElementById('date-text');

//Container
const container = document.getElementById('tasksContainer');

//Set date
const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
  text.textContent = date.toLocaleString('es', { weekday: 'long' });
  month.textContent = date.toLocaleString('es', { month: 'short' });
  year.textContent = date.toLocaleString('es', { year: 'numeric' });


}
const addNewTask = event => {
  event.preventDefault();//avoid sending form
  const { value } = event.target.taskText;
  if (!value) return;//no value no do
  const task = document.createElement('div');
  task.classList.add('task', 'app-Todo');
  task.addEventListener('click', changueState);
  task.textContent = value;
  container.prepend(task);//Prepend add first list
  event.target.reset();
}
const changueState = event => {
  event.target.classList.toggle('done');
}
const order = () => {
  const ready = [];
  const todo = [];
  container.childNodes.forEach(element => {
    element.classList.contains('done') ? ready.push(element) : todo.push(element);
  });
  return [...todo, ...ready];
}
const renderOrder = () => {
  order().forEach(element => container.appendChild(element));
}
setDate();