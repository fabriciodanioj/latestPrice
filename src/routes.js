import { Router } from "express";

import SearchCompanyController from "./app/controllers/SearchCompanyController";
import ListCompanyController from "./app/controllers/ListCompanyController";
import PlotChartController from "./app/controllers/PlotChartController";
import ShowCompanyController from "./app/controllers/ShowCompanyController";
import RealTimeChartController from "./app/controllers/RealTimeChartController";
import NewsController from "./app/controllers/NewsController";

const routes = Router();

routes.post("/company", SearchCompanyController.store);

routes.get("/symbols", ListCompanyController.index);
routes.get("/chart", PlotChartController.index);
routes.get("/show", ShowCompanyController.show);
routes.get("/realtime", RealTimeChartController.show);
routes.get("/news", NewsController.show);


export default routes;
