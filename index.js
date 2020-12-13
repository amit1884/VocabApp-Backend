const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const DictionaryRouter=require('./Routes/Dictionary')
const PORT =5000||process.env.port
const app=express()
app.use(cors())
app.use(DictionaryRouter)


// Local db connection
    //   mongoose.connect('mongodb://localhost/VocabApp',{useNewUrlParser: true,useUnifiedTopology: true })
    //     .then(()=>{
    //     console.log('databse connected')
    //     })     
    //     .catch(()=>{
    //         console.log(' database not connected')
    //     });
    
        // Remote db connection
      mongoose.connect(process.env.MONGOURI,{useNewUrlParser: true,useUnifiedTopology: true })
      .then(()=>{
      console.log('databse connected')
      })     
      .catch(()=>{
          console.log(' database not connected')
      });

app.get('/',(req,res)=>{
    res.send('Welcome to Vocab Backend')
})

app.listen(PORT,(err)=>{
    if(err)
    console.log(err)
    else 
    console.log('Server Running on '+PORT)
})