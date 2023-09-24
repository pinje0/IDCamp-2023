import React from 'react';
import { createRoot } from 'react-dom/client';

class MyForm extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            nama: '',
            email: '',
            gender: 'Man',
        };

        // binding this context to event handler
        this.onNameChangeEventHandler =
            this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler =
            this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler =
            this.onGenderChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    // Event Handler Name
    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            };
        });
    }

    // Event Handler Email
    onEmailChangeEventHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    // Event Handler Gender
    onGenderChangeEventHandler(event) {
        this.setState(() => {
            return {
                gender: event.target.value,
            };
        });
    }

    // Event Handler Submit
    onSubmitEventHandler(event) {
        // menghentikan aksi default dari tombol submit
        event.preventDefault();
        const message = `
      Name : ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
    `;
        alert(message);
    }

    // function render
    render() {
        return (
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.onSubmitEventHandler}>
                    <label htmlFor='name'>Name: </label>
                    <input
                        id='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.onNameChangeEventHandler}
                    />
                    <br />
                    <label htmlFor='email'>Email: </label>
                    <input
                        id='email'
                        type='text'
                        value={this.state.email}
                        onChange={this.onEmailChangeEventHandler}
                    />
                    <br />
                    <select
                        value={this.state.gender}
                        onChange={this.onGenderChangeEventHandler}
                    >
                        <option value='Man'>Man</option>
                        <option value='Woman'>Woman</option>
                    </select>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);
