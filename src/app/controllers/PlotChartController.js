import api from '../../services/api';

class PlotChartController {
    async index(req, res) {
        const token = process.env.SECRET_API;
        const { symbol, range } = req.headers;
        
        const { data } = await api.get(`/stock/${symbol}/chart/${range}/?token=${token}`);

        return res.json(data);
    }
} 

export default new PlotChartController();