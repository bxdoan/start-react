// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// ref. https://github.com/marak/Faker.js/
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:25PM" avatar={faker.image.avatar()} text="Nice blog post?"/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:24PM" avatar={faker.image.avatar()} text="Nice blog post?"/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:23PM" avatar={faker.image.avatar()} text="Nice blog post?"/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:22PM" avatar={faker.image.avatar()} text="Nice blog post?"/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:21PM" avatar={faker.image.avatar()} text="Nice blog post?"/>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:21PM" avatar={faker.image.avatar()} text="Nice blog post?"/>
            </ApprovalCard>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
