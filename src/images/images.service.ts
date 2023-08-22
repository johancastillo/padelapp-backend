import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ImagesDto } from './dto/images.dto';
import { Images } from './interfaces/images.interface';

@Injectable()
export class ImagesService {


    constructor(@InjectModel('images') private readonly imagesModel){}


    // Save Images
    async saveImage(filename:ImagesDto){
        const file = await new this.imagesModel(filename);
        return await file.save();
    }

    // Get All Images
    async getAllImages(){
        const images = await this.imagesModel.find();
        return images
    }

    // Delete Image
    async deleteImage(id){
        const imageDeleted = await this.imagesModel.findByIdAndDelete(id);
        return imageDeleted;
    }

}
