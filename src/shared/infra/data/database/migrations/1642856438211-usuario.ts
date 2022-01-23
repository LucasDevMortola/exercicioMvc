import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class usuario1641752020379 implements MigrationInterface {

    private tabelaUsuario = new Table({
        name: "usuario",
        columns: [
            {
                name:"uuid",
                type:"varchar",
                isPrimary: true,
                isNullable:false
            },
            {
                name: "nomeUsuario",
                type: "varchar",
                isNullable: false,
                length: "100"
            },
            {
                name: "senha",
                type: "varchar",
                length: "50",
                isNullable: false
            },
            {
                name: "ativado",
                type: "boolean",
                isNullable: true
            }

        ]
    })
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.tabelaUsuario)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario")
    }

}