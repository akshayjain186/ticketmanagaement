

const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect("mongodb+srv://Ketan:Ketan1234@cluster0.fftbpam.mongodb.net/ticketmanagement?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Database connection failed:" + err.message);
    });
};

module.exports = dbconnect;

