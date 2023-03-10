import React from 'react';
import './glass.css';

export const Gdiv = (props) => {
    console.log(props);
  return (
    <div id={props.id?props.id:null} style={props} className={props.className?`${props.className} Gdiv`:'Gdiv'}>
        {props.children}
    </div>
  )
}
export const Ginput = (props) => {
    const stateFunction=props.stateFunction;
    console.log(props);
    if(props.placeholder===undefined){
        props={...props,placeholder:'react-glass-input'}
    }
  return (
    <input id={props.id?props.id:null} className={props.className?`${props.className} Ginput`:'Ginput'} style={props} placeholder={props.placeholder} value={props.stateValue} onChange={(e)=>stateFunction(e.target.value)} />
  )
}
export const Gbutton = (props) => {
    console.log(props);
  return (
    <button id={props.id?props.id:null} className={props.className?`${props.className} Gbutton`:'Gbutton'} style={props} >
        {props.children}
    </button>
  )
}