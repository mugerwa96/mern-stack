// use require to import packages from  node_modules
const express =require('express');
const notes=require('./data/notes');
const dotenv= require('dotenv');

// creaating an object of the imported package
const app =express();
dotenv.config()
// creating a web server
const PORT =process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))

// Creating an API end point
// An end point is  the route used to fetch data from the database
 app.get('/',(req,res)=>{
        res.send("API is runnning");
 });

//  getting all notes
 app.get('/api/notes',(req,res)=>res.send(notes));


//  getting a particular note basing on ID
 app.get('/api/notes/:id',(req,res)=>{
        const note=notes.find(note=>note._id==req.params.id)
        if(note){

            res.send(note)
        }else{
            res.send({message:"Not found"})
        }
 })

