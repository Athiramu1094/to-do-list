import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    if (input.trim() !== '') {
      setTodoList([...todoList, { text: input, checked: false }]);
      setInput('');
    }
  }

  function handleCheck(index) {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].checked = !updatedTodoList[index].checked;
    setTodoList(updatedTodoList);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleDelete(index) {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  }

  const style = {
    textDecoration: 'line-through',
    color: 'green'
  };

  return (
    <div className='page-container'>
      <div className='container'>
        <h1>To-do List</h1>
        <div className="input-row">
          <input
            type="text"
            value={input}
            onKeyPress={handleKeyPress} 
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={handleClick}>Add</button>
        </div>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>
              <div className="task-row">
                <span style={item.checked ? style : {}}>{item.text}</span>
                <div className="button-row">
                  <button className='check-button' onClick={() => handleCheck(index)}>
                    <span className="material-symbols-outlined">Check</span>
                  </button>
                  <button className='delete-button' onClick={() => handleDelete(index)}>
                    <span className="material-symbols-outlined">Delete</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
