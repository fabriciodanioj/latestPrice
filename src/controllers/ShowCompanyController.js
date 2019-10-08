const Company = require("../models/Company");

module.exports = {
    async show(req, res) {  
        const { _id } = req.headers;

        const info = await Company.findById({ _id });

        return res.json(info);
    },
}