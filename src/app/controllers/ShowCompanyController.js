import Company from "../models/Company"

class ShowCompanyController {
    async show(req, res) {  
        const { _id } = req.headers;

        const info = await Company.findById({ _id });

        return res.json(info);
    }
}

export default new ShowCompanyController();