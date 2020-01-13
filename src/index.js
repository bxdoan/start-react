// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Doan
                    </a>
                    <div className="metadata">
                        <span className="date">Today at {getTime()}</span>
                    </div>
                    <div className="text"> Nice blog post?</div>
                </div>
            </div>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
