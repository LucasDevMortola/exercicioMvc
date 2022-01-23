import { usuarioRepository } from './../../infra/repositories/usuario.repository';
import { ok,serverError } from './../../../../shared/presentation/helpers/http-helper';
import { Request, Response } from "express";
import Controller from "../../../../shared/presentation/contract/controller";

export default class CreateUsuarioController implements Controller{
    //async, pois é uma promisse
   async handle(req: Request, res: Response): Promise<any> {
        try {
            const repository = new usuarioRepository()
            
            const usuario = await repository.create(req.body)
            return ok(res,usuario)

        } catch (error) {
            console.log(error)
            serverError(res)
        }
    }

}