/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function NoteSearch({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className='note-search'>
            <input
                type='text'
                placeholder='Cari catatan ...'
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default NoteSearch;
