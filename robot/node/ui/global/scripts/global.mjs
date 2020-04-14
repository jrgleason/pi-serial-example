const forward = document.getElementById("forward");
forward.addEventListener("click", () => {
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/movement/forward");
    oReq.send();
});
const backward = document.getElementById("backward");
backward.addEventListener("click", () => {
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/movement/backward");
    oReq.send();
});