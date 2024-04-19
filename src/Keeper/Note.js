import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <div className="notes-container">
      <div className="note-main">
        <div className="note">
          <h4 className="note-title">{props.title}</h4>
          <p className="note-para">{props.content}</p>
          <Button
            variant="contained"
            className="note-area"
            onClick={deleteNote}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
