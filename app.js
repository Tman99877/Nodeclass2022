var express = require('express');
var mongoose = require('mongoose')
var app = express();

app.use('/static', express.static ("public"));
app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs");

const mongodb = 'mongodb+srv://wallace_tyrese:cz69Jl8MzqgTRr8w@cluster0.bq0gq1u.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB error connection"))

app.get('/', function(req,res){
    res.render('todo.ejs');
})

app.post('/',(req,res)=>{
    console.log(req.body.content)
})

app.listen(3000,function(){
    console.log('App listening on port 3000')
})
