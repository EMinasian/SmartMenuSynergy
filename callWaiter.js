function callWaiter() {
    let background = document.createElement('div');
    background.setAttribute("id","background-panel");
    let callPanel = document.createElement('div');
    callPanel.textContent = "The waiter has been informed about your call.";
    let okButton = document.createElement('button');
    callPanel.append(okButton);
    okButton.setAttribute("id", "ok-button");
    okButton.setAttribute("onclick", "closeWindow()");
    okButton.textContent = "OK";
    callPanel.setAttribute("id","call-panel");
    background.append(callPanel);
    document.getElementById('message-box').append(background);
}

function closeWindow() {
    let panel = document.getElementById("background-panel");
    panel.remove();
}