function sendChat() {
    let inputValue = document.querySelector(`[id="chat-input"]`).value;
    let chat = document.getElementById("chat-box");
    let newMessage = createMessage(inputValue);
    newMessage.classList.add("message");
    chat.append(newMessage)
    document.getElementById("chat-input").value = "";
    let newReply = reply();
    newReply.classList.add("reply");
    newReply.style.textAlign = "left";
    chat.scrollTop = chat.scrollHeight;
    setTimeout(()=> {chat.append(newReply);
        chat.scrollTop = chat.scrollHeight;}, 1000);
}

function createMessage(value) {
    let message = document.createElement("p");
    message.textContent = value;
    console.log(message);
    return message;
}

function reply() {
    let replies = ["Hello", "Yes", "No", "Welcome", "Ok"];
    let reply = replies[randomInteger(0, 4)];
    return createMessage(reply);
}


makeWaiter();

function makeWaiter() {
    let waiters = ["Tigran Khachatryan", "Anna Mirzoyan", "Anush Girgoryan", "Arman Isajanyan"];
    let heading = document.getElementById("chat-heading");
    let waiterName = waiters[randomInteger(0, 3)];
    let waiter = makeWaiterName(waiterName);
    heading.append(waiter);
}

function makeWaiterName(waiterName) {
    let waiter = document.createElement("p");
    waiter.textContent = waiterName;
    return waiter;
}


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}