/* eslint-disable no-unused-vars */
import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({ notes, onDelete, onAddNote }) {
    return (
        <div className='note-app__body'>
            <NoteInput addNote={onAddNote} />
            <h2>Catatan Aktif</h2>
            {notes.length === 0 ? (
                <p className='notes-list__empty-message'>Tidak ada catatan</p>
            ) : (
                <NoteList notes={notes} onDelete={onDelete} />
            )}
            <h2>Arsip</h2>
        </div>
    );
}

export default NoteBody;
