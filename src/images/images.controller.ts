import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {readFileSync} from 'fs';
import { Express, Response } from 'express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/images.helpers';
import { ImagesService } from './images.service';
import fs from 'fs';


@Controller('images')
export class ImagesController {

    constructor(private readonly imagesService: ImagesService){}

    @Get('')
    async getAllImages(){
        const images = await this.imagesService.getAllImages()
        
        return {
            status: true,
            message: 'Success',
            images: images
        }
    }

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
        
        const image = await this.imagesService.saveImage({filename: file.filename});
        
        return res.status(HttpStatus.OK).json({
             message: 'Image saved successfully',
             filename: image
        })

    }

    // Eliminar imagen
    @Delete('/delete/:id')
    async removeImage(@Param('id') imageID){

        console.log(imageID)

        //const imagesDelete = await this.imagesService.deleteImage(imageID);

        //fs.rm('/uploads/4GMAX_P-c495-4GMAX_P.png', () => console.log("imagesDeleteeeed"))

        return {
            message: "Delete success",
            filename: 'imagesDelete'
        };
    }


}
