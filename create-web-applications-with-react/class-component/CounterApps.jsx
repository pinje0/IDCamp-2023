import React from 'react';
import { createRoot } from 'react-dom/client';

// component function
function CounterDisplay({ count }) {
    if (count % 5 === 0 && count % 7 === 0) {
        return <p>FizzBuzz</p>;
    }

    if (count % 5 === 0) {
        return <p>Fizz</p>;
    }

    if (count % 7 === 0) {
        return <p>Buzz</p>;
    }

    return <p>{count}</p>;
}

// component function dengan props increase
function IncreaseButton({ increase }) {
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    );
}

function ResetButton({ reset }) {
    return (
        <div>
            <button onClick={reset}>- reset</button>
        </div>
    );
}

// Parent Component
class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi nilai count di dalam stage
        this.state = {
            count: 0,
        };

        // binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    // method (event handler)
    onIncreaseEventHandler() {
        this.setState((previousStage) => {
            return {
                count: previousStage.count + 1,
            };
        });
    }

    // method (event handler)
    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0,
            };
        });
    }

    render() {
        return (
            <div>
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);
