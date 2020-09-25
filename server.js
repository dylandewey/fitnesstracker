const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3030

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://root:password!@fitnesstracker.9clmu.mongodb.net/workouts?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
