const express = require('express');
const app= express();
const morgon = require('morgan');
const dotenv = require('dotenv');
const mysqlPool = require('./config/mysql');
const routes = require('./routes/routes.root');
dotenv.config();

//middlewares
app.use(express.json());
app.use(morgon('dev'));
app.use(express.urlencoded({extended: false}));
app.use('/api',routes);

app.use((err, req, res, next) => {
    if (err.isBoom) {
      const { output } = err;      
      const{statusCode,message} = output.payload;
      res.status(output.statusCode).json( {status:false,statusCode,message});
    } else {
        res.status(500).json({ status:false, statusCode: 500, message:"Internal Server Error" });
    }
  });


app.get('/test', (req,res)=>{
    res.status(200).send("<h1> Calendar Web APP </h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`);
})

