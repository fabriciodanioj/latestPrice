const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    exchange: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    latestPrice: {
        type: Number,
        required: true,
    },
    industry: String,
    country: String,
    updatedAt:{
        type: Date,
        default: Date.now(),
    }    
});

module.exports = mongoose.model("Company", CompanySchema);
