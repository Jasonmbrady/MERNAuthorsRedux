const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authors2-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.log("Unable to connect to database", err));

require("../models/Author");