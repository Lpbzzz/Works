// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



var $val = $('.txt'),
    $jia = $('.jia'),
    $jian = $('.jian'),
    $odd = $('.odd'),
    $ansy = $('.ansy');
function counter(state = 0, action) {
    let {type,val} = action;
    switch (type) {
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
        default:
            return state;
    }
}




const store = createStore(counter,applyMiddleware(thunk));
store.subscribe(() => {
    let state = store.getState();
    $val.val(state);
})

function increment(){
    return function(dispatch,getState){
        dispatch({type:"INCREMENT"});
    }
}
function decrement(){
    return ({type:"DECREMENT"});
}




function inIfOdd(){
    return function(dispatch,getState){
        let state = getState();
        if(!(state%2===0)){
            dispatch(increment());
        }else{
            dispatch(decrement());
        }
    }
}

function async(){
    return function(dispatch,getState){
        setTimeout(()=>{
            dispatch(increment())
        },1000);
    }
}
$val.val('0');
$jia.click(function(event) {
    store.dispatch({type:"INCREMENT"});
});
$jian.click(function(event) {
    store.dispatch({type:"DECREMENT"});
});
$odd.click(function(event) {
    store.dispatch(inIfOdd());
});
$ansy.click(function(event) {
    store.dispatch(async());
});

//获取元素,添加事件  .click(store.dispatch({}))

// store.dispatch({ type: 'INCREMENT' });
//
//
// store.dispatch({ type: 'DECREMENT' });

//action的创建函数
// action一定是一个纯JS对象.

// function increat(val){
//     return {type:"INCREMENT",val}//这里的val可有可无,是一个传递数据的参数
// }

//
