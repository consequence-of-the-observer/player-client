var ws = new WebSocket("ws://127.0.0.1:8000/player");

ws.onopen = () => console.log("WebSocket connected");

ws.onmessage = function(event) {
    var messages = document.getElementById("roll_tracker");
    var message = document.createElement('li');
    var content  = document.createTextNode(event.data);
    message.appendChild(content);
    messages.appendChild(message);
}