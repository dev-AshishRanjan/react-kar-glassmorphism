function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import './glass.css';
export var Gdiv = function Gdiv(props) {
  console.log(props);
  return /*#__PURE__*/React.createElement("div", {
    id: props.id ? props.id : null,
    style: props,
    className: props.className ? props.className + " Gdiv" : 'Gdiv'
  }, props.children);
};
export var Ginput = function Ginput(props) {
  var stateFunction = props.stateFunction;
  console.log(props);
  if (props.placeholder === undefined) {
    props = _extends({}, props, {
      placeholder: 'react-glass-input'
    });
  }
  return /*#__PURE__*/React.createElement("input", {
    id: props.id ? props.id : null,
    className: props.className ? props.className + " Ginput" : 'Ginput',
    style: props,
    placeholder: props.placeholder,
    value: props.stateValue,
    onChange: function onChange(e) {
      return stateFunction(e.target.value);
    }
  });
};
export var Gbutton = function Gbutton(props) {
  console.log(props);
  return /*#__PURE__*/React.createElement("button", {
    id: props.id ? props.id : null,
    className: props.className ? props.className + " Gbutton" : 'Gbutton',
    style: props
  }, props.children);
};