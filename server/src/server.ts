import express from 'express';
import routes from './routes'
import cors from 'cors';

const app =express();
//express usar json 
app.use(cors());
app.use(express.json());

app.use(routes);
//ouvir requisições
app.listen(3333);
