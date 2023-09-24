import React from 'react';

// menerima 2 properti, onDelete handler
function DeleteButton({ id, onDelete }) {
    return (
        <button className='contact-item__delete' onClick={() => onDelete(id)}>
            X
        </button>
    );
}

export default DeleteButton;
