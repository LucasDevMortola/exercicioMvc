import { Request,Response, Router } from "express";
import CreateUsuarioController from "../controller/createUsuarioController";
import GetAllUsuarioController from "../controller/getAllUsuarioController";
import GetOneUsuarioController from "../controller/getAllUsuarioController";

export default class UsuarioRouter {

    public init():Router{
        const routes = Router();

        routes.post("/usuario", new CreateUsuarioController().handle)
        routes.get("/getall", new GetAllUsuarioController().handle)
        routes.get("/usuario/:uid",new GetOneUsuarioController().handle)
        routes.get("/",(req:Request,res:Response)=>{
            res.send("ok")
        })
        return routes;
    }
}
