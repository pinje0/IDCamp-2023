import React from 'react';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            nextId: 7,
            searchQuery: '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        const newNote = {
            id: this.state.nextId,
            createdAt: +new Date(),
            title,
            body,
            archived: false,
        };

        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, newNote],
                nextId: prevState.nextId + 1,
            };
        });
    }

    onSearchHandler(query) {
        this.setState({ searchQuery: query });
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) =>
            note.title
                .toLowerCase()
                .includes(this.state.searchQuery.toLowerCase())
        );

        return (
            <div id='root' className='note-app'>
                <NoteHeader onSearch={this.onSearchHandler} />
                <NoteBody
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onAddNote={this.onAddNoteHandler}
                />
            </div>
        );
    }
}

export default NoteApp;
