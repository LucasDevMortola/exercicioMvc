import App from "./shared/presentation/app";
import Database from "./shared/infra/data/connection/Database";
import "dotenv/config"


new Database().openConnection()
    .then(()=>{
        const app = new App()
        app.init()
        app.start(process.env.PORT as string| '3333') 
    })
    .catch((err)=>{
        console.log(err)
    })

