import mongoose from 'mongoose';

const mongodb = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb+srv://nintendo:nintendo123456@cluster0-nnx4p.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
        resolve(res);
        console.log('mongodb is connection')
    }).catch(err => {
        reject(err);
    })

});
export default mongodb;