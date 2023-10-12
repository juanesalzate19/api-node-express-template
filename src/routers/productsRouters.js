import { Router } from "express";
import { 
    getProducts,
    getByIdProducts,
    postProducts,
    putProducts,
    deleteProducts 
} from "../controller/productsControllers";


export const productsRouters = Router();
productsRouters.get('/', getProducts);//Metodo get
productsRouters.post('/', postProducts);//Metodo post
productsRouters.put('/', putProducts);//Metodo put
productsRouters.delete('/', deleteProducts);//Metodo delete
productsRouters.getById('/', getByIdProducts);//Metodo getbyid