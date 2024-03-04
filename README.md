A utility for creating arrays with unique elements in JavaScript.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation

Install UniQify using npm:
npm install uniqify


## Usage
const uniqify = require('uniqify');

const inputArray = [1, 2, 3, 4, 1, 2, 5];
const result = uniqify(inputArray);
console.log(result); // Output: [1, 2, 3, 4, 5]
