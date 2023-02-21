# React kar Glassmorphism

>- We are facing some problem related to babel.
>- so this package is currently not compatible with CRA.
>- You can use this package on [codesandbox](https://codesandbox.io/s/beautiful-wing-kf8o5i?file=/src/App.js)

<!-- > Can be used in codesandbox, see [example](https://codesandbox.io/s/beautiful-wing-kf8o5i?file=/src/App.js) -->

We provide 3 React components :
- Gdiv - A modified HTML div Element
- Ginput - A modified HTML input Element
- Gbutton - A modified HTML button Element

## start using this package by running 
```shell
npm i react-kar-glassmorphism
```

## Gdiv

The modified HTML div Element for glassmorphism

```jsx app.js
import {Gdiv} from 'react-kar-glassmorphism';
const App = () => {
  return (
    <Gdiv/>
  );
}
```
The most commonly used props are:
- minWidth
- minHeight
- border
- background
- borderRadius
- padding

>The list of all props that can be passed to this react component are :
>- minWidth, minHeight, width, height, zIndex, border, background, borderRadius, backdropFilter, fontFamily, boxShadow, padding
>- You can use any css property as props aslong they are in js fromat (camelcase).
>- For things like hover, focus etc you can use classes and ids. These can be passed as props to this react component.



## Ginput

The modified HTML div Element for glassmorphism

```jsx app.js
import {Ginput} from 'react-kar-glassmorphism';
const App = () => {
  return (
    <Ginput placeholder='name' stateValue={first} stateFunction={setFirst}/>
  );
}
```
The most commonly used props are:
- placeholder
- stateValue
- stateFunction

>The list of all props that can be passed to this react component are :
>- placeholder, stateValue, stateFunction, width, zIndex, border, background, borderRadius, fontFamily, padding, color
>- You can use any css property as props aslong they are in js fromat (camelcase).
>- For things like hover, focus etc you can use classes and ids. These can be passed as props to this react component.



## Gbutton

The modified HTML div Element for glassmorphism

```jsx app.js
import {Gbutton} from 'react-kar-glassmorphism';
const App = () => {
  return (
    <Gbutton/>
  );
}
```
The most commonly used props are:
- minWidth
- minHeight
- border
- background
- borderRadius
- padding
- color

>The list of all props that can be passed to this react component are :
>- minWidth, minHeight, zIndex, border, background, borderRadius, backdropFilter, fontFamily, boxShadow, padding, color
>- You can use any css property as props aslong they are in js fromat (camelcase).
>- For things like hover, focus etc you can use classes and ids. These can be passed as props to this react component.



## usecases

you can also pass childrens inside props.

App.js
```jsx app.js
import React,{useState,useEffect} from 'react';
import { Gdiv,Gbutton,Ginput } from 'react-kar-glassmorphism';
import './App.css';
const App = () => {
  const [first, setFirst] = useState('');
  useEffect(() => {
    console.log(first);
  }, [first]);
  
  return (
    // Gdiv has a child Ginput
    <Gdiv minWidth='10rem' minHeight='10rem' zIndex='1' border='1px solid white' background='rgba(255,255,255,.2)' borderRadius='0.5rem' backdropFilter='blur(0.2rem)' fontFamily='monospace' boxShadow='2px 2px 4px black' padding='0.7rem'>
      <Ginput/>
    </Gdiv>

    // Gbutton has a text as child
    <Gbutton minWidth='5rem' minHeight='3rem' zIndex='1' border='1px solid white' background='rgba(255,255,255,.1)' borderRadius='0.3rem' backdropFilter='blur(0.5rem)' fontFamily='monospace' boxShadow='2px 2px 5px black' padding='0.7rem' className='btn' color='white'>
      lol
    </Gbutton>

    // Ginput has react state and statefunction as props
    <Ginput placeholder='name' stateValue={first} stateFunction={setFirst} id='inputId'/>
  );
}
```
App.css
```css App.css
.btn:hover {
  background: red !important;  /* have to use !important as we want to change some inline css which has highest priority */
}

#inputId{
  font-weight: 500;
}
```