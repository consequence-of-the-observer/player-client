function joinSession() {
    sessionStorage.setItem("username", document.getElementById("username").value);
    location.replace("./session.html");
}