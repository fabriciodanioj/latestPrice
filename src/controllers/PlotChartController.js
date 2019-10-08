const axios = require("axios");

module.exports = {
    async index(req, res) {
        const token = process.env.SECRET_API;
        const { symbol, range } = req.headers;
        
        const { data } = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/${range}/?token=${token}`);

        return res.json(data);
    },
}