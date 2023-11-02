import axios from 'axios';
import https from 'https';
import * as dotenv from 'dotenv';
import { startServer } from './server'; // Asumiendo que server.ts exporta la función startServer
import { ImagenCelebracionData } from './Interfaces/interfaces';

dotenv.config();

export async function createFichaPostal(name: string) { 
    console.log(name);
}

export async function getImagenesCelebracion(name: string) { 
    const responseData: ImagenCelebracionData = {
        name: 'Ejemplo de nombre',
        positionText: 'Ejemplo de posición de texto',
        src: 'https://ejemplo.com/imagen.png'
    };
    return responseData;
}

startServer(process.env.PORT);
