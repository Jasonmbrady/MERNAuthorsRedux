const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/belt-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to database!"))
    .catch(err => console.log("Unable to connect to database", err));

// require model file here