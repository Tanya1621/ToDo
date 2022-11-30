const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    board: {
        type: String,
        required: true,
    },
    //here
    // _id: {
    //     type: String,
    //     required: true,
    // }

})


module.exports = new mongoose.model('ToDo', ToDoSchema)