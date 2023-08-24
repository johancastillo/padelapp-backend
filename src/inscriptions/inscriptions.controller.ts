import { Controller, Get, Post } from '@nestjs/common';

@Controller('inscriptions')
export class InscriptionsController {

    // GET All Inscriptions
    @Get("")
    async getAllInscriptions(){
        return "Hola"
    }

    // Create inscripcion
    @Post("")
    async createInscription(){
        return "Hola"
    }

}
