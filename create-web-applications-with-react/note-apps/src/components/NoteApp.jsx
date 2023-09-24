/* eslint-disable no-unused-vars */
import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils';

function NoteApp() {
    const notes = getInitialData();

    return (
        <div className='note-app'>
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} />
        </div>
    );
}

export default NoteApp;
