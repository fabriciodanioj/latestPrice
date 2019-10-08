const axios = require("axios");
const Company = require("../models/Company");
require('dotenv').config();

module.exports = {
    async store(req, res) {
        let { symbol } = await req.body;
        const token = process.env.SECRET_API;

        symbol = symbol.toUpperCase();

        const { data } = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=${token}`);

        const latestPrice = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote/latestPrice?token=${token}`);

        let company = await Company.findOne({ symbol });

        if(!company) {
            company = await Company.create({
                symbol,
                companyName: data.companyName,
                description: data.description,
                exchange: data.exchange,
                website: data.website,
                industry: data.industry,
                country: data.country,
                latestPrice: latestPrice.data,
            })
        }

        await Company.findOneAndUpdate(
            { symbol },
            { latestPrice: latestPrice.data,
            },
            {upsert: true}
        )

        return res.json(company);
    },
}