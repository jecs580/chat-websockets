const socket = io();
/* Si tu backend tiene una direccion diferente a la del frontend,entonces
debes colocar su URL dentro de los parentesis
*/

// Dom elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');


btn.addEventListener('click',()=>{
    socket.emit('chat_message',{
        username:username.value,
        message:message.value
    })
    console.log('click');
})
message.addEventListener('keypress',()=>{
    socket.emit('chat_typing',username.value);
})
socket.on('chat_message',(data)=>{
    actions.innerHTML='';
    output.innerHTML+= `<p>
        <strong>${data.username}</strong>: ${data.message}
    </p>`
});

socket.on('chat_typing',(data)=>{
    console.log(data);
    actions.innerHTML=`<p>
        <em>${data}</em> esta escribiendo ...
    </p>`
});