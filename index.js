const http = require("node:http");
const server = http.createServer((e, respuesta)=>{
    const url = e.url;
    if(url == "/"){
        respuesta.end("!Bienvenido al servidor de NodeJs!")
    }
});

const port = 3000;
server.listen(port, ()=>{
    console.log("Servidor iniciado en el puerto 3000");
});