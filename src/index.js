// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return 'Click Me!'
}

function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Create a react component
const App = () => {
    return (
        <div>
            <div>Current Time:</div>
            <h3>{getTime()}</h3>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'green', color: 'red' }}>
                {getButtonText()}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
