const axios = require("axios");

module.exports = {
    async index(req, res) {
        const token = process.env.SECRET_API;

        const { data } = await axios.get(`https://cloud.iexapis.com/stable/ref-data/symbols?filter=symbol,name,iexId&token=${token}`);

        return res.json(data);
    },
}