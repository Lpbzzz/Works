import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import HeadModel from './comp/header';
import ConsMdoel from './comp/cons';
import Login from './comp/loginin';



import registerServiceWorker from './registerServiceWorker';
var storage = window.localStorage;
storage.setItem("c",3)
console.log(window.localStorage.c);

class App extends Component {
    
    render(){





        return (
            <div>
                {/* <HeadModel />
                <ConsMdoel /> */}
                <Login />
            </div>
        )
    }
}






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
if (module.hot) {
    module.hot.accept();
}
