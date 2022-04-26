const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;

// SERVER ON 

app.listen(PORT, () => console.log(`SERVER ON PORT ${PORT}`));

// STATIC FILES

app.use(express.static(__dirname + "/public"));

// ROUTER

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    
});

