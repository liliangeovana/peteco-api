import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import firestore from './firestore';


const api = express();
dotenv.config();

api.use(express.json());
api.use(cors());

api.get('/listar', async (req: Request, res: Response) => {
  const querySnapshot = await firestore.collection("notes").get();

  const list: Array<any> = [];  // Usando `any` para não restringir os campos retornados
  querySnapshot.forEach(doc => {
    list.push(doc.data());  // Retorna todos os dados do documento sem especificar os campos
  });

  res.json(list);
});

api.listen(process.env.APP_PORT, () => console.log('Servidor rodando!'));