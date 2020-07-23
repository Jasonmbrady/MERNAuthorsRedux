const mongoose = require("mongoose");


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Author's name must be 3 or more characters"]
    }
}, { timestamps: true });

mongoose.model("Author", AuthorSchema);