import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [noteItems, setNoteItems] = useState([]);

  function addNote(note) {
    setNoteItems((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id) {
    setNoteItems((prevNoteItems) => {
      return prevNoteItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onTrigger={addNote} />
      {noteItems.map((item, index) => {
        return (
          <Note
            onChecked={deleteNote}
            key={index}
            id={index}
            title={item.title}
            content={item.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
