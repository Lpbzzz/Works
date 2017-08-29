import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import HeadModel from './comp/header';
import ConsMdoel from './comp/cons';
import registerServiceWorker from './registerServiceWorker';



class App extends Component {
    
    render(){
        return (
            <div>
                <HeadModel />
                <ConsMdoel />
            </div>
        )
    }
}






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
if (module.hot) {
    module.hot.accept();
}