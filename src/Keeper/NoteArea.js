import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Keeper.css"

export default function NoteArea(props) {

  const [note,setNote] = useState({
    title : "",
    content : ""
  });

  const Change = (event) => {
    const {value,name} =event.target;

    setNote((prev)=>{
      return{
        ...prev,
        [name] : value
      }
    })
  }

  const clicked = (event)=>{
    event.preventDefault();
    props.addnote(note);
    setNote({
      title : "",
    content : ""
    })
  }

  return (
    <>
      <div class="area-main">
        <h3>Keep Note</h3>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            value={note.title}
            name="title"
            onChange={Change}
            placeholder="Write a title..."
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            value={note.content}
            onChange={Change}
            name="content"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write content..."
          ></textarea>
        </div>
        <div className="note-area-btn">
        <Button variant="contained" onClick={clicked}>
        <AddCircleIcon />
      </Button>
      </div>
      </div>
    </>
  );
}
