import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InscriptionsService } from './inscriptions.service';

@Controller('inscriptions')
export class InscriptionsController {

    constructor(private readonly inscriptionsService:InscriptionsService){}

    // GET All Inscriptions
    @Get("")
    async getAllInscriptions(){
        const inscription = await this.inscriptionsService.getAllInscriptions();
        
        return {
            message: "Hola",
            data: inscription
        };
    }

    // Create inscripcion
    @Post("")
    async createInscription(@Body() inscription){
        console.log(inscription)
        const newInscription = await this.inscriptionsService.createInscription(inscription);

        return {
            status: true,
            data: newInscription
        }
    }

    // Change status
    @Put("confirm/:id")
    async confirmInscription(@Param("id") inscriptionID, @Body() data){
    
        console.log("CONFIRM", inscriptionID, data);
        const confirm = await this.inscriptionsService.editInscription(inscriptionID, data)

        return {
            data: confirm
        }
    }

}
