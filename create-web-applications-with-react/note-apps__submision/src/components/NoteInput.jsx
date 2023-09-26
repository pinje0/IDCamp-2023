import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxTitleLength: 50,
        };

        this.onTitleChangeEventHandler =
            this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler =
            this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const value = event.target.value;
        if (value.length <= this.state.maxTitleLength) {
            this.setState(() => {
                return {
                    title: value,
                };
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const remainingChars =
            this.state.maxTitleLength - this.state.title.length;

        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Buat catatan</h2>
                <p className='note-input__title__char-limit'>
                    Sisa karakter: {remainingChars}
                </p>
                <input
                    className='note-input__title'
                    type='text'
                    placeholder='Ini adalah judul ...'
                    required=''
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                    className='note-input__body'
                    type='text'
                    placeholder='Tuliskan catatanmu di sini ...'
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    required=''
                ></textarea>
                <button type='submit'>Buat</button>
            </form>
        );
    }
}

export default NoteInput;
