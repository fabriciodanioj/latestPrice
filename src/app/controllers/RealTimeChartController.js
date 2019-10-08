import api from '../../services/api';

class RealTimeChartController {
    async show(req, res) {
        const token =  process.env.SECRET_API;
        const { symbol } = req.headers;

        const latestPrice = await api.get(`/stock/${symbol}/quote/latestPrice?token=${token}`);
        
        return res.json(latestPrice.data);
    }
}

export default new RealTimeChartController();
