import React from "react";
//import HighlightOffIcon from "@mui/icons-material/HighlightOff";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Todolist = (prop) => {
  return (
    <>
      <div className="div_list">
        <button className="btn"
          onClick={() => {
            prop.onSelect(prop.ind);
          }}
        >
          <i class="bi bi-x-circle-fill icon-30"></i>
        </button>
        <li>{prop.text}</li>
      </div>
    </>
  );
};

export default Todolist;
