var ws = new WebSocket("wss://award-pools.gl.at.ply.gg:17558/player");

ws.onopen = () => console.log("WebSocket connected");

ws.onmessage = function(event) {
    var messages = document.getElementById("roll_tracker");
    var message = document.createElement('li');
    var content  = document.createTextNode(event.data);
    message.appendChild(content);
    messages.appendChild(message);
}