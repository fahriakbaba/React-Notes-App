 import React from "react";
import Main from "./components/main/Main.jsx";
 import Sidebar from "./components/sidebar/Sidebar.jsx";


function App() {
  const [notes, setNotes] = React.useState([]);

  const addNote = () => {
    const newNote = {
      id: new Date().getTime().toString(),
      title: "Title",
      body: "you can add"
    }

    setNotes(prevNotes => ([...prevNotes, newNote]));
  }

  console.log(notes);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Main /> 
    </div>
  );
}

export default App;
