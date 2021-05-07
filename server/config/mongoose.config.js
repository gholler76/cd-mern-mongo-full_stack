const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database, son!"))
    .catch(err => console.log("Yo, something went wrong when connecting to the database, B.", err));

