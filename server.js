const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())

require("./server/config/database");
require("./server/routes/author-routes")(app);

app.listen(8000, () => console.log("Listening on port 8000"));