import React from "react";
import Main from "./components/main/Main.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";


function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNoteId, setActiveNoteId] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  const addNote = () => {
    const date = new Date();
    // Request a weekday along with a long date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const newNote = {
      id: new Date().getTime().toString(),
      title: "Title",
      body: "you can add",
      history: date.toLocaleString('en-US', options)
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
    //setNotes(prevNotes => prevNotes.map(note => note.id === activeNoteId ? { ...text } : note));
    setNotes(prevNotes => {
      const newArrayList = [];
      for(let i=0; i<prevNotes.length; i++) {
        if(prevNotes[i].id === activeNoteId) {
          newArrayList.unshift(text);
        } else {
          newArrayList.push(prevNotes[i]);
        }
      }
      return newArrayList;
    })
  }


  return (
    <div className="App">
      <Sidebar addNote={addNote} notes={notes} deleteNote={deleteNote} activeNoteId={activeNoteId} setActiveNoteId={setActiveNoteId} />
      <Main currentNote={getCurrentNote()} updateNote={updateNote} />
    </div>
  );
}

export default App;
