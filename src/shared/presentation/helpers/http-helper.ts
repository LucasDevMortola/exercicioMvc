import { Response } from "express"

export const ok = (res:Response,data:any) =>{
    res.status(200).json(data)
}

export const serverError = (res:Response)=>{
    res.status(500).json({error: "Internal server error"})
}