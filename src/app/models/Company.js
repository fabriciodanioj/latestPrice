import { Schema, model } from "mongoose";

const CompanySchema = new Schema({
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

export default model("Company", CompanySchema);
