const express = require("express");

const routes = express.Router();

const SearchCompanyController = require("./controllers/SearchCompanyController")
const ListCompanyController = require("./controllers/ListCompanyController")
const PlotChartController = require("./controllers/PlotChartController")
const ShowCompanyController = require("./controllers/ShowCompanyController")
const RealTimeChartController = require("./controllers/RealTimeChartController")

routes.post("/company", SearchCompanyController.store);

routes.get("/symbols", ListCompanyController.index);
routes.get("/chart", PlotChartController.index);
routes.get("/show", ShowCompanyController.show);
routes.get("/realtime", RealTimeChartController.show);

module.exports = routes;