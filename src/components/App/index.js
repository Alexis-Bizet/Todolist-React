import { useState } from 'react';
import './styles.css';

function index() {
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const [selectedDay, setSelectedDay] = useState('Lundi');
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [notification, setNotification] = useState('');

  const addTask = (task) => {
    const newTask = {
      id: Math.random(),
      task: task,
      day: selectedDay,
    };

    setList([...list, newTask]);
    setInput('');
    setNotification('La tâche a été ajoutée');
    setTimeout(() => setNotification(''), 1000);
  };

  const deleteTask = (id) => {
    const newList = list.filter((task) => task.id !== id);

    setList(newList);
    setNotification('La tâche a été supprimée');
    setTimeout(() => setNotification(''), 1000);
  };

  return (
    <div className="task-main">

      <h1 className="title"> Todo List</h1>

      <div className="select">
        <select onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="btn-task" onClick={() => addTask(input)}>&#10140;</button>
      </div>

      {notification && <div className="notif-task">{notification}</div>}

      <div className="container-task">
        {daysOfWeek.map((day) => (
          <div className="list-task" key={day}>
            <h2 className="day">{day}</h2>
            <ul>
              {list.filter((task) => task.day === day).map((task) => (
                <li className="lists-task" key={task.id}>
                  {task.task}
                  <button className="btn-list" onClick={() => deleteTask(task.id)}>&#10003;</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}

export default index;
