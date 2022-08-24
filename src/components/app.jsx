import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Note from './note.jsx';
import NoteInfo from "../notes.js";

function createNote(noteData) {
  return (
    <Note
      key={noteData.key}
      noteTitle={noteData.title}
      noteContent={noteData.content}
    />
  )
}

    function App() {
        return  (
          <div>
            <Header/>
            {NoteInfo.map(createNote)}
            <Footer/>
          </div>
  )}

    export default App;
