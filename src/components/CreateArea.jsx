import React, { useState } from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpanded] = useState(false)

  function expand(){
    setExpanded(true);
  }

  function submitNote(event) {
    props.onTrigger(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <div>
      <form className="create-note">
        {expanded && <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />}
        <textarea
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={ expanded? 3:1}
        />
        <Zoom in = {expanded}><Fab onClick={submitNote}><NoteAddIcon /></Fab></Zoom>

      </form>
    </div>
  );
}


export default CreateArea;
