const forward = document.getElementById("forward");
forward.addEventListener("click", () => {
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/robot/motor/forward");
    oReq.send();
});
const backward = document.getElementById("backward");
backward.addEventListener("click", () => {
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/robot/motor/backward");
    oReq.send();
});
const left = document.getElementById("left");
left.addEventListener("click", () => {
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/robot/motor/left");
    oReq.send();
});
const right = document.getElementById("right");
right.addEventListener("click", () => {
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/robot/motor/right");
    oReq.send();
});

const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/robot/motor/stop");
    oReq.send();
});

Array.from(document.querySelectorAll('mwc-slider')).forEach(function(e) {
  e.addEventListener('input', function(e) {
    console.log(JSON.stringify(e));
  });
  e.addEventListener('change', function(e) {
    console.log(JSON.stringify(e));
  });
});