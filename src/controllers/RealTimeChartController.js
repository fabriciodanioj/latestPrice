const axios = require("axios");

module.exports = {
    async show(req, res) {
        const token =  process.env.SECRET_API;
        const { symbol } = req.headers;

        const latestPrice = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote/latestPrice?token=${token}`);
        
        return res.json(latestPrice.data);
    }
}