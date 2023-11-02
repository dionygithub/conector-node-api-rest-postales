// server.ts
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as businessLogic from './index';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/postales/api/v1/create/postal', (req: Request, res: Response) => {
  const newItem: string = req.body.name;  //{name:nombreindice} 
  const response = businessLogic.createFichaPostal(newItem);
  res.json(response);
});

app.post('/postales/api/v1/imagenes/celebracion', (req: Request, res: Response) => {
  const newItem: string = req.body.namecelebracion;  //{name:namecelebracion} 
  const response = businessLogic.getImagenesCelebracion(newItem);
  res.json(response);
});

app.get('/', (req: Request, res: Response) => {
  console.log("diony");
  res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

function startServer(PORT: string | undefined = process.env.PORT) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export { startServer };
