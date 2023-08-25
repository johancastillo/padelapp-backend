import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class InscriptionsService {

    constructor(@InjectModel("inscriptions") private readonly inscriptionsModel){}

    // Get All Inscriptions
    async getAllInscriptions(){
        const inscriptions = await this.inscriptionsModel.find();
        return inscriptions;
    }

    // Create
    async createInscription(inscripcion){
        const newInscription = await new this.inscriptionsModel(inscripcion);
        return newInscription.save();
    }

    // Edit
    async editInscription(id, inscription){
        console.log("UPDATE", inscription);
        const newInscription = await this.inscriptionsModel.findByIdAndUpdate(id, inscription, {new: true});
        return newInscription;
    }

}
