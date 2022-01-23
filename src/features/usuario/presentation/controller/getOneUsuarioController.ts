import { usuarioRepository } from './../../infra/repositories/usuario.repository';
import { Request, Response } from "express";


import Controller from "../../../../shared/presentation/contract/controller";
import { ok,serverError } from '../../../../shared/presentation/helpers/http-helper';
import { usuario } from '../../domain/models/usuario';


export class GetOneUsuarioController implements Controller{
   async handle(req: Request, res: Response): Promise<any> {
        try {
            const { uid } = req.params;

            console.log(uid)

            const repository = new usuarioRepository()

            const usuario =  await repository.getByUid(uid)
            res.send(uid)
            // return ok(res,usuario)

        } catch (error) {
            serverError(res)
        }
    }

}