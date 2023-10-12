import Express from "express";

//Routers
import {usersRouters} from "./routers/usersRouters.js";

const app = Express();
const port = 3000;

//App Routers
app.use("/api/users", usersRouters);
app.use('/', (request, response) => {
    response.send("!Hello Word!");
});

app.use('*', (request, response)=>{
    response.status(404).send("No se pudo encontrar la pagina");

})

app.listen(port, () => {
    console.log(`Server ruting on port 3000 🍆`);
});