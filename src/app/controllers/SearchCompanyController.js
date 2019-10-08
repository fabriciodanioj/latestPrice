import api from '../../services/api';
import Company from "../models/Company";

class SearchCompanyController {
    async store(req, res) {
        let { symbol } = await req.body;
        const token = process.env.SECRET_API;

        symbol = symbol.toUpperCase();

        const { data } = await api.get(`/stock/${symbol}/company/?token=${token}`);

        const latestPrice = await api.get(`/stock/${symbol}/quote/latestPrice?token=${token}`);

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
    }

}

export default new SearchCompanyController()