const express = require('express');
const app = express();

const mainRouter = require('./controllers/main')

app.use('/api', mainRouter);

const port = process.env.PORT || 2000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}. . .`);
})



