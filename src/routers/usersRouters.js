import { Router } from "express";
import { 
    getUsers,
    getById,
    postUser,
    putUser,
    deleteUser
} from "../controller/usersControllers.js";

export const usersRouters = Router();
usersRouters.get('/', getUsers); //Metodo get
usersRouters.post('/', postUser);//Metodo post
usersRouters.get('/:id', getById);//GetById
usersRouters.put('/:id', putUser);//Metodo put
usersRouters.delete('/:id', deleteUser);//Metodo delete