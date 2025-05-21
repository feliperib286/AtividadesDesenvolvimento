import { Router } from "express";
import {last} from "../controllers/megasenaController";


const routes = Router();
routes.get("/", last);

export default routes;