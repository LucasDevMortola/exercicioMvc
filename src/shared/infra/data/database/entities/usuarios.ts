import {BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid'
@Entity({
    name:"usuario"
})
export class UsuarioEntity extends BaseEntity{

    @PrimaryColumn()
    uuid?:string

    @Column()
    nomeUsuario?:string

    @Column()
    senha?: string;

    @Column()
    ativado?: boolean

    constructor(nomeUsuario:string,senha:string,ativado:boolean){
        super();
        this.uuid = uuid();
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
        this.ativado = ativado;
    }

    @BeforeInsert()
    private BeforeInsert(){

    }

    @BeforeUpdate()
    private BeforeUpdate(){

    }

}
