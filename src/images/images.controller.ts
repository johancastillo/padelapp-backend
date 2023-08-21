import { Body, Controller, Post } from '@nestjs/common';
import {readFileSync} from 'fs';

@Controller('images')
export class ImagesController {

    constructor(){}

    // Convertir imagenes a base 64
    @Post('/convert')
    imageToBase64(@Body() data){

        
        const toBase64 = (filePath) => {
            const img = readFileSync(filePath);
            
            return Buffer.from(img).toString('base64');
        }
        
        
        console.log(data, toBase64(data.image));
        
        return data;
    }

    // De base 64 a imagenes


}
