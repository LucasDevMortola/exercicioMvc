import { Request, Response } from "express";
import express from 'express';

export default interface Controller{

   handle(req:Request, res:Response):Promise<any>
   
}

