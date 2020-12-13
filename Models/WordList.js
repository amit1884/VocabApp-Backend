var mongoose=require('mongoose');
var WordListSchema=new mongoose.Schema({
  id:{
      type:String
  },
  origin:[{
      type:String
  }],
  category:{
      type:String
  },
  senses:[
      {
          definitions:[{type:String}],
          shortDefinitions:[{type:String}],
          examples:[{
              text:{type:String,default:"empty"},
          }],
          subsenses:[{
              definitions:[{type:String}],
              shortDefinitions:[{type:String}],
              examples:[{
                text:{type:String,default:"empty"}
            }],
          }]
      }
  ]

});

module.exports=mongoose.model('WordList',WordListSchema);
