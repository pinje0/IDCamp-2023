/* eslint-disable no-unused-vars */
import React from 'react';
import NoteSearch from './NoteHeaderSearch';

function NoteHeader({ onSearch }) {
    return (
        <div className='note-app__header'>
            <h1>Notes | ノート</h1>
            <NoteSearch onSearch={onSearch} />
        </div>
    );
}

export default NoteHeader;
