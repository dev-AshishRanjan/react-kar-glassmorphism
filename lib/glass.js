"use strict";

exports.__esModule = true;
exports.Ginput = exports.Gdiv = exports.Gbutton = void 0;
var _react = _interopRequireDefault(require("react"));
require("./glass.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Gdiv = function Gdiv(props) {
  console.log(props);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: props.id ? props.id : null,
    style: props,
    className: props.className ? props.className + " Gdiv" : 'Gdiv'
  }, props.children);
};
exports.Gdiv = Gdiv;
var Ginput = function Ginput(props) {
  var stateFunction = props.stateFunction;
  console.log(props);
  if (props.placeholder === undefined) {
    props = _extends({}, props, {
      placeholder: 'react-glass-input'
    });
  }
  return /*#__PURE__*/_react.default.createElement("input", {
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
exports.Ginput = Ginput;
var Gbutton = function Gbutton(props) {
  console.log(props);
  return /*#__PURE__*/_react.default.createElement("button", {
    id: props.id ? props.id : null,
    className: props.className ? props.className + " Gbutton" : 'Gbutton',
    style: props
  }, props.children);
};
exports.Gbutton = Gbutton;