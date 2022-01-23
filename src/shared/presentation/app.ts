import express,{Request,Response} from 'express'
import cors from 'cors'
import UsuarioRouter from '../../features/usuario/presentation/routes/Routes'

export default class App{
    readonly #express: express.Express

    constructor(){
        this.#express = express()
    }

    public init(){
        this.middlewares()
        this.routes()
    }
    public routes(){
        this.#express.get("/", (req:Request, res:Response)=>{
            res.status(200).send("ok")
        })
    
        const userRoutes = new UsuarioRouter().init()
        this.#express.use(userRoutes)
    }
    public middlewares(){
        this.#express.use(express.json())
        this.#express.use(cors())
    }
    public start(port:string){
        this.#express.listen(port, ()=>{
            console.log("Server is running " + port)
        })
    }

}