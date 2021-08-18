import express from 'express';
const server = express();
const port = 3000;
import { json, urlencoded } from 'body-parser';
/*
Daqui 
 */
import { body, validationresult } from 'express-validator';
import AttractionsModel from '/DataBase/models_attraction/attraction';
server.use(json());
server.use(urlencoded({ extended: false }));
server.post("/AttractionSchema", [
        body.("name").isString(),
        body.("capacity").isNumber(),
        //validar os resto do dados

    ])
    /*Até aqui, colocar em controller/atenticarControllerAttraction*/

require('./controllers/autenticarControllers')(server);

/*
server.get('/', (request, response) => {
    response.send('deu certo')
});
*/
server.listen(port);
server.listen(port);