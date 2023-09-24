/* eslint-disable no-unused-vars */
import React from 'react';
import NoteItemContent from './NoteItemContent';

function NoteItem({ title, createdAt, body }) {
    return (
        <div className='note-item'>
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
        </div>
    );
}

export default NoteItem;
