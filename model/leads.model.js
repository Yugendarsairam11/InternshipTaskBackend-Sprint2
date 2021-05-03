var mongoose=require('mongoose')
var schema=mongoose.Schema;
// const taskSchema = new Schema({
//     description: {
//         type: String
//     }
// });
var LeadsSchema=new schema({
    id:{
        type:Number
    },
    image:{
        type:String
    },
    email:{
        type:String
    },
    username:{
        type:String
    },
    number:{
        type:String
    },
    course:{
        type:String
    },
    ads:{
        type:String
    },
    purpose:{
        type:String
    },
    // tasks: [taskSchema],
    // checkLists: [],
    // notes: []

})

module.exports=mongoose.model('lead',LeadsSchema)