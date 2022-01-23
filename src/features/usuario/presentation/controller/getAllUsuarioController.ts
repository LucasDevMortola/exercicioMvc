import { usuario } from './../../domain/models/usuario';
import { Request, Response } from "express";
import Controller from "../../../../shared/presentation/contract/controller"
import { usuarioRepository } from "../../infra/repositories/usuario.repository";
import { UsuarioEntity } from '../../../../shared/infra/data/database/entities/usuarios';

export default class GetAllUsuarioController implements Controller {

    async handle(req: Request,res: Response): Promise<any> {
       
            const allUsuarios = await UsuarioEntity.find()

            const allUsers:any = allUsuarios.map((el)=>{
                return {
                    nome: el.nomeUsuario,
                    senha: el.senha
                }
            })
            res.send(allUsers)
            return allUsers
            
        } 
       
    

}