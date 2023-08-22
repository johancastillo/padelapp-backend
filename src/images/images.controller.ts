import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {readFileSync} from 'fs';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/images.helpers';


@Controller('images')
export class ImagesController {

    constructor(){}

    // Guardar imagenes
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: renameImage
        }),
        fileFilter: fileFilter
    }))
    uplodFile(@Body() data, @UploadedFile() file: Express.Multer.File){

        console.log(file)
        return data;
    }

    // De base 64 a imagenes


}
