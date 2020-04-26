import Bind from 'bindings';

const bindings = Bind("./build/Release/robot-ui.node");

const result = bindings.hello();

console.log(`The result is ${result}`);