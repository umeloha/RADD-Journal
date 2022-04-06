const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require('fs')


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(`C:/Users/danie/Documents/futureproof/Projects/Journal/client/index.html`);
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let data = JSON.stringify(username, null, 2)
    console.log(data);
    fs.appendFile('words.txt', username + "\n", finished)
    function finished() {
        console.log('finished')
    }
    res.end(`${username}`);
});


let myArray = fs.readFileSync('words.txt', 'utf8').split('\n');
let arr2 = []
for(let i = 0; i < myArray.length - 1; i++){
    let newPost = {message : myArray[i]}
    JSON.stringify(newPost)
    arr2.push(newPost)    
}
console.log(arr2)

app.get('/x', (req, res) => {
    console.log(arr2.length)
    let arr = fs.readFileSync('words.txt', 'utf8').split('\n');
    let arr3 = []
    for(let i = 0; i < arr.length - 1; i++){
        let newPost = {message : arr[i]}
        JSON.stringify(newPost)
        arr3.push(newPost)    
    }
    console.log(arr.length)
    if (arr3.length > arr2.length + 1) {
        console.log("hello")
        res.send(arr3)
    } else {
        res.send(arr2)
    }
    
})

//exporting
module.exports = app
