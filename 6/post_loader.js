const express = require('express')
const app = express();
const port = 8000;

app.use('/js', express.static(__dirname + '/js'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/post_loader.html');
}); 


let date_obj = new Date();
    // current hours
let hours = date_obj.getHours();
// current minutes
let minutes = date_obj.getMinutes();
// current seconds
let seconds = date_obj.getSeconds();
let date_time = hours + ":" + minutes + ":" + seconds;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}! ${date_time}`)
}); 

async function fetchAsync (url) {
    let response = await fetch (url);
    let data = await response.json()
    return data;
}

// let counter = 1;
// let url = 'https://jsonplaceholder.typicode.com/posts/${counter}';
// fetch(url);
// .then(res=>res.json());
// .then 
// document.getElementById("title_output").innerHTML