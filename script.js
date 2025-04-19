let time = document.querySelector('#timer');

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

time.innerText = `${day}/${month}/${year}, ${hour}:${minute}:${second}`;