import { Body, Controller, HttpStatus, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {readFileSync} from 'fs';
import { Express, Response } from 'express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/images.helpers';
import { ImagesService } from './images.service';


@Controller('images')
export class ImagesController {

    constructor(private readonly imagesService: ImagesService){}

    // Guardar imagenes
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: renameImage
        }),
        fileFilter: fileFilter
    }))
    async uplodFile(
        @UploadedFile() file: Express.Multer.File,
        @Res() res:Response
    ){

        console.log(file)
        
        //return await this.imagesService.saveImage({filename: file.filename});
        return res.status(HttpStatus.OK).json({
            message: 'Image saved successfully',
            filename: file.filename
        })

    }

    // De base 64 a imagenes


}
