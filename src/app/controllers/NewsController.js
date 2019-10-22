import api from '../../services/api';

class ShowController {
    async show(req, res) {
        const token = process.env.SECRET_API;
        const { symbol } = await req.headers;
        const { data } = await api.get(`/stock/${symbol}/news/last/1?token=${token}`);

        return res.json(data);
    }
};

export default new ShowController();