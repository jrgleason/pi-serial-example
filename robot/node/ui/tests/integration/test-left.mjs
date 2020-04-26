import Bind from 'bindings';

const bindings = Bind("robot-ui.node");
bindings.left();
setTimeout(()=>{
bindings.stop();
}, 1000);
