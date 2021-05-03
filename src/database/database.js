const mongoose = require('mongoose')


const URI = 'mongodb://localhost/mern-tasks'

 mongoose.connect(URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}
        )
    .then(db => console.log('db Online'))
    .catch(err => console.log(err))




module.exports = mongoose 








// const dbConection = async() => {

//     try {
//          await mongoose.connect( process.env.DB_CNN , {
//              useNewUrlParser:true,
//              useUnifiedTopology:true,
//              useCreateIndex:true
//          })

//          console.log('DB_Online');
//     } catch (error) {
//         console.log(error);
//         throw new Error( 'error al conectar base de datos')
        
//     }
// }

// module.exports = {
//     dbConection
// }