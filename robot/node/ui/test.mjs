import Bind from 'bindings';

const bindings = Bind("robot-ui.node");

const result = bindings.hello();

console.log(`The result is ${result}`);