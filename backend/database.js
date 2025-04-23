const mongoose =require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb://localhost:27017/studentapp');
    if(conn){
        console.log('database connect successfully')

    }
    else{
        console.log('connection fail');
    }
}
module.exports=dbConn;