import api from '../../services/api';

class ListCompanyController {
    async index(req, res) {
        const token = process.env.SECRET_API;
        const { data } = await api.get(`/ref-data/symbols?filter=symbol,name,iexId&token=${token}`);

        return res.json(data);
    }
};

export default new ListCompanyController();