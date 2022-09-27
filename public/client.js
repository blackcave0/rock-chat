// const { Socket } = require("socket.io");

// connecting 
const socket = io()
let name;
// for prompt 
/* do {
    name = prompt('Plese enter your name')
} while (!name) */

// getting text area

let textArea = document.querySelector('#textarea')
const txtempy = document.getElementById('textarea')
const sendBtn = document.getElementById('sendBtn')
sendBtn.addEventListener('click', ()=>{
    if(txtempy.value.length == 0) {
        return false
    } else {
        sendMessage(txtempy.value)
    }
    
}) 

// sendBtn.onclick = function() {sendMessage(txtempy.value)}
textArea.addEventListener('keyup', (e) => {
    if(e.target.value.length == 0){
        return false
    } else if ((e.key === 'Enter')) {
        sendMessage(e.target.value)
    } 
})

function sendMessage (message){
    let msg = {
        user : name,
        messsage : message
    }
    // console.log(message);
    // Appending 
    appendMessage(msg, 'outgoing')
    scrollToBottom()
    // Send to Server
    socket.emit('message',msg)
}

let messsageArea = document.querySelector('.message__area')
function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.messsage}</p>
    `

    mainDiv.innerHTML = markup
    messsageArea.appendChild(mainDiv)
    txtempy.value = ''
}




// :: RECIEVE MESSAGE :: //

socket.on('message', (msg)=>{
    // console.log(msg);
    appendMessage(msg, 'incoming')
    scrollToBottom()
})


// 

function scrollToBottom(){
    messsageArea.scrollTop = messsageArea.scrollHeight
}