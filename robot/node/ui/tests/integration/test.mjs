import Bind from 'bindings';

const bindings = Bind("robot-ui.node");

const result = bindings.hello();

console.log(`The result is ${result}`);
bindings.forward();
setTimeout(()=>{
  bindings.left();
  setTimeout(()=>{
    bindings.forward();
    setTimeout(()=>{
      bindings.stop();
    }, 2000)
  }, 1000)
}, 2000)
