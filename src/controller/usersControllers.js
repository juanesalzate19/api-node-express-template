//Esta es la funcion que maneja el metodo get al endpoint 
export function getUsers(request, response){
    response.send("GET/users");
}

//Esta es la funcion que maneja el getbyid el cual recibe el endpoint 
//el cual recibe usuarios por id 
export function getById(request, response){
    response.send("Usuarios con id: ")
}


//Esta es la funcion que maneja el put el cual recibe el endpoint 
//el cual recibe usuarios por id
export function putUser(request, response){
    response.send("Usuarios con id: ")
}

//Esta es la funcion que maneja el post el cual recibe el endpoint 
//el cual recibe usuarios por id
export function postUser(request, response){
    response.send("Usuarios con id: ")
}

//Esta es la funcion que maneja el put el cual recibe el endpoint 
//el cual recibe usuarios por id
export function deleteUser(request, response){
    response.send("Usuarios con id: ")
}