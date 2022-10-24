import React from "react";
import Main from "./components/main/Main.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";


function App() {
  const [notes, setNotes] = React.useState([]);
  const [activeNoteId, setActiveNoteId] = React.useState("");

  const addNote = () => {
    const newNote = {
      id: new Date().getTime().toString(),
      title: "Title",
      body: "you can add"
    }

    setNotes(prevNotes => ([...prevNotes, newNote]));
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id);
    })
  }

  const getCurrentNote = () => {
    const findNote = notes.find(note => note.id === activeNoteId);
    return findNote;
  }

  const updateNote = (text) => {
    setNotes(prevNotes => prevNotes.map(note => note.id===activeNoteId ? {...text} : note))
  } 


  return (
    <div className="App">
      <Sidebar addNote={addNote} notes={notes} deleteNote={deleteNote} activeNoteId={activeNoteId} setActiveNoteId={setActiveNoteId} />
      <Main currentNote={getCurrentNote()} updateNote={updateNote} />
    </div>
  );
}

export default App;
