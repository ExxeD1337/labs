import React from "react";
import ReactDOM from "react-dom";

// Переменные
let age = "12";
let name = "John";

// Применение переменных
let output = <span>James is {age} years old</span>;

// отрисовка
ReactDOM.render(output, document.querySelector("#myDiv"));