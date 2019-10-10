'use strict';

// example 1

const { _internal, tooBig, ...cleanObject } = {el1: '1',
  _internal:"secret", tooBig:{}, el2: '2', el3: '3'};
console.log(cleanObject); // {el1: '1', el2: '2', el3: '3'}

// example 2

const car = {
  model: 'bmw 2018',
  engine: {
    v6: true,
    turbo: true,
    vin: 12345
  }
}

const modelAndVIN = ({model, engine: {vin}}) => `model: ${model} vin: ${vin}`;

console.log(modelAndVIN(car)); // model: bmw 2018  vin: 12345
