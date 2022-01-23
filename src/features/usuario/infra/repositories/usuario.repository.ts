import { Entity } from 'typeorm';
import { usuario } from './../../domain/models/usuario';
import { UsuarioEntity } from "../../../../shared/infra/data/database/entities/usuarios";

export class usuarioRepository{

    async create(data: any): Promise<usuario>{
       const usuario = await UsuarioEntity.create({
            nomeUsuario:data.nomeUsuario,
            senha: data.senha
        })
        await usuario.save()
        return data

    return data

    }


    async getByUid(uid: string): Promise<usuario | undefined>{
        
        const usuarioEntity = await UsuarioEntity.findOne(uid)

        if(!usuarioEntity) return undefined;

        return {
            nomeUsuario: usuarioEntity.nomeUsuario,
            senha: usuarioEntity.senha
        } as any
    }
}