const express=require('express');
const WordList = require('../Models/WordList');
const FuzzySearch=require('fuzzy-search');
const { query } = require('express');
const router=express.Router();

// Routes to add new words in database
router.get('/add',(req,res)=>{
    const newData=JSON.parse(req.query.data);

    const ndata=new WordList(newData)
    console.log(ndata)
    ndata.save()
    .then(savedData=>{

        res.send(savedData)
    })
    .catch(err=>console.log(err))
})

// Route to get all the cached words from database

router.get('/getwords',(req,res)=>{

    WordList.find({})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>console.log(err))
})

router.get('/search',(req,res)=>{

    const queryString=req.query.text;
    if(queryString!=undefined)
    {
        WordList.find({})
        .then(foundWord=>{
            const searcher = new FuzzySearch(foundWord, ['id'], {
                caseSensitive: false,
            })
            const words=searcher.search(queryString)
            res.json({words})
        })
        .catch(err=>console.log(err))
    
    }
    // let userString=new RegExp(`^${queryString}`)
    // WordList.find({id:{$regex:userString}})
    // .then(words=>{
    //     res.json({words})
    // })
    // .catch(err=>console.log(err))
})

module.exports=router;