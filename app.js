const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();

//SERVER
const port = process.env.PORT || 3000;
app.listen (port, function (){
    console.log('Server http:/localhost:'+ port);
});

//ERRORS
app.use((req, res, next)=>{
    const error = new Error ('Not found');
    error.status = 404;
    next (error);
})
app.use ((error, req, res, next)=>{
    res.status (error.status || 500);
    res.json ({
        error: {
            message: error.massage
        }
    });
});
