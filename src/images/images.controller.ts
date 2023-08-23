import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/images.helpers';
import { ImagesService } from './images.service';
import {renameSync, unlinkSync} from 'fs';


@Controller('images')
export class ImagesController {

    constructor(
        private readonly imagesService: ImagesService,
        
    ){}

    @Get('')
    async getAllImages(){
        const images = await this.imagesService.getAllImages()
        
        return {
            status: true,
            message: 'Success',
            images: images
        }
    }

    // Show File
    @Get('pictures/:filename')
    showFile(@Param('filename') filename, @Res() resp){
        resp.sendFile(filename, {root: './uploads'})
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
        @Res() res:Response,
        @Body() body
    ){

        console.log(file)
        
        const image = await this.imagesService.saveImage({filename: file.filename, title: body.title});
        
        return res.status(HttpStatus.OK).json({
             message: 'Image saved successfully',
             filename: image
        })

    }

    // Eliminar imagen
    @Delete('/delete')
    async removeImage(@Query('id') imageID, @Query('filename') filename){

        console.log(imageID, filename)

        
        
        // Renombrar un archivo
        //renameSync('./uploads/4GMAX_P-c495-4GMAX_P.png', './uploads/color.png');
        
        //Eliminar un archivo
        //unlinkSync('./uploads/color.png');
        
        // Delete file in server
        unlinkSync(`./uploads/${filename}`);
        
        // Delete document in mongodb
        const imagesDelete = await this.imagesService.deleteImage(imageID);

        return {
            message: "Delete success",
            filename: imagesDelete
        };
    }


}
