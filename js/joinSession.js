function joinSession() {
    sessionStorage.setItem("username", document.getElementById("username").value);
    location.replace(location.origin + location.pathname+"/session.html");
}