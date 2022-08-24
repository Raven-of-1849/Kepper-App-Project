import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Note from './note.jsx';
import NoteInfo from "../notes.js";


function App() {
  return ( <
    div >
    <
    Header / > {
      NoteInfo.map(noteData =>
        ( <
          Note key = {
            noteData.key
          }
          noteTitle = {
            noteData.title
          }
          noteContent = {
            noteData.content
          }
          />
        )


      )
    } <
    Footer / >
    <
    /div>
  )
}

export default App;
