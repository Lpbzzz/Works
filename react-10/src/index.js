import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import HeadModel from './comp/header';
import ConsMdoel from './comp/cons';
import Login from './comp/loginin';



import registerServiceWorker from './registerServiceWorker';
// var storage = window.localStorage;
// storage.setItem("c",3)

// console.log(window.localStorage.c);
// console.log(window.localStorage.getItem('c'))
var userPool = [
    { 'name': 'abc', pass: 'abc' ,id:0},
    { 'name': '123', pass: '123', id:1},
    { 'name': 'ABC', pass: 'ABC', id: 2},
    { 'name': 'QWE', pass: 'QWE', id: 3},
    { 'name': '刘朋博', pass: 'abc', id: 3 },
    { 'name': 'Bob', pass: 'abc', id: 4},
    { 'name': 'Leo', pass: 'abc', id: 5 },
    { 'name': 'Reachrt', pass: 'abc', id: 6 },
    { 'name': 'NodeJs', pass: 'abc', id: 7 },
    { 'name': 'React', pass: 'abc', id: 8 },
]


class App extends Component {

     


    render(){
        let switz = null;
        // console.log(window.localStorage.getItem('c'))


        switz = window.localStorage.getItem('user') ? <div><HeadModel {...userPool}/> <ConsMdoel /></div> : <Login {...userPool}/>

        return (
            <div>
                {/* <HeadModel />
                <ConsMdoel /> */}
                {/* <Login /> */}
                {switz}
            </div>
        )
    }
}






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
if (module.hot) {
    module.hot.accept();
}
