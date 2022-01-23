//Configuração do banco de dados
require("dotenv").config();

const rootDir = process.env.NODE_ENV?.toLowerCase() === "production" ? "dist" : "src";
console.log(rootDir);

module.exports  = {
    type: 'postgres',
    // url: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    logging: false,
    entities: [
       rootDir +'/shared/infra/data/database/entities/**/*'
    ],
    migrations : [
        rootDir+'/shared/infra/data/database/migrations/**/*'
    ],
    cli: {
        entitiesDir: 'src/shared/infra/data/database/entities',
        migrationsDir: 'src/shared/infra/data/database/migrations'
    },
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }  
}