import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleItem = (event) => {
    setItem(event.target.value);
  };

  const handleBtn = () => {
    setList((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  const deleteItem = (ind) => {
    setList((oldItems) => {
      return(oldItems.filter((ele,index) => {
        return ind !== index;
      }))
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBtn();
    }
  };

  return (
    <React.Fragment>
      <div className="main_div">
          <h1 className="heading">ToDo List</h1>
          <input
            type="text"
            className="input"
            placeholder="Add...."
            value={item}
            onChange={handleItem}
            onKeyPress={handleKeyPress}
          />
          <button className="btn" onClick={handleBtn}>
            <i class="bi bi-plus-circle-fill icon-30"></i>
          </button>
          <ol>
            {list.map((val, index) => {
              return (
                <Todolist
                  text={val}
                  key={index}
                  ind={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
    </React.Fragment>
  );
}

export default App;
