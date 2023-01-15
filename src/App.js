import React, { useState } from 'react';
 import './style.css';

function Navbar() {
    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
    setSearch(event.target.value);
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Notes</h1>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <form className="navbar-search-form">
        <input 
          type="text" 
          placeholder="Search" 
          value={search} 
          onChange={handleSearch}
          className="navbar-search-input"
        />
        <button className="navbar-search-button">Search</button>
      </form>
    </nav>
  );
}

 export default Navbar;


 export const NoteTakingPage = ()=>{
  const [notes, setNotes] = useState([]);

  const handleAddNote = (event) => {
    event.preventDefault();
    const newNote = {
      text: event.target.note.value,
      date: new Date().toLocaleString()
    };
    setNotes([...notes, newNote]);
    event.target.note.value = '';
  }

  return (
    <div className="note-taking-page">
      <form onSubmit={handleAddNote}>
        <textarea name="note" placeholder="Take a note..." className="note-input" />
        <button type="submit" className="add-note-button">Add Note</button>
      </form>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note.text}</p>
            <p>{note.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




