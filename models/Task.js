const mongoose = require('mongoose');

    const TaskSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        date: {
            type: Date,
            required: true
        },
        priority: {
            type: Number,
            default: 1
        },
        completed: {
            type: Boolean,
            default: false
        }
    });

    module.exports = mongoose.model('Task', TaskSchema);