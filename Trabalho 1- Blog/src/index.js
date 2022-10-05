const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res)=>{
    const diretorio = __dirname;
    console.log({diretorio});
    res.sendFile(diretorio + '/html/index.html');
})

app.get('/posts', (req, res)=>{
    const diretorio = __dirname;
    console.log({diretorio});
    res.sendFile(diretorio + '/html/add-post.html');
})

app.get('/add-post', (req, res) => {
    const diretorio = __dirname;
    console.log({diretorio});
    res.sendFile(diretorio + '/html/add-post.html');
})

app.get('/posts/:id', (req, res) =>{

})

app.get('/posts/delete/:id', (req, res) =>{

})

app.post('/posts', (req, res) =>{

})

app.post('/posts/id', (req, res) =>{

})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
        console.log(`SERVER STARTED AT PORT ${PORT}`)
    }
);