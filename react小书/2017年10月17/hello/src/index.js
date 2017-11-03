import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


class Header extends Component {
    render() {
        return (
            renderContent("Hello World")
        )
    }
}
function renderContent(par) {
    return (
        <h1>{par}</h1>
    )
}
ReactDOM.render(
    <Header />,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
