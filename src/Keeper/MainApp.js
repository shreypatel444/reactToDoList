import React, {  useState } from "react";
import Navbar from "./Keeper/Navbar"
import Footer from "./Keeper/Footer"
import Note from "./Keeper/Note"
import NoteArea from "./Keeper/NoteArea"

export default function App() {
  const [addItem, setAddItem] = useState([]);

  const Fnaddnote = (note) => {
    setAddItem((prev) => {
      return [...prev, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((prevvalue) =>
      prevvalue.filter((curr, ind) => {
        return ind !== id;
      })
    );
  };

  return (
    <>
      <Navbar />
      <NoteArea addnote={Fnaddnote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
}
