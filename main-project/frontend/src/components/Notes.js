import React, { useState, useEffect } from 'react';
import Note from './Note';
import axios from 'axios';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const { data } = await axios.get('http://localhost:8080/api/notes');
      setNotes(data.data);
    }
    fetchNotes();
    return () => {};
  }, []);

  async function handleDelete(id) {
    console.log(`Deleting id: ${id}`);
    const { data } = await axios.delete(
      `http://localhost:8080/api/notes/${id}`
    );
    if (data.data.deletedCount === 1) {
      const newNotes = notes.filter(note => note._id !== id);
      setNotes(newNotes);
    }
  }

  return (
    <section>
      <div className='container'>
        <div className='row'>
          {notes &&
            notes.map(note => (
              <Note key={note._id} note={note} handleDelete={handleDelete} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Notes;
