const express = require('express');
const app = express();

app.use("/", (req,res)=> {
   
   res.send("Welcome to Dev "); 
});
app.use("/api", (req,res)=> {
    res.send("Welcome to Dev Tinder API"); 
 });

app.listen(3000, ()=>{
    console.log("App is running on port 3000");
    
})