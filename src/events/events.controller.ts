import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {

    constructor(private readonly eventsService:EventsService){}


    @Get('')
    async getAllEvents(): Promise<any>{
        const events = await this.eventsService.getAllEvents()
        return events
    }


    @Post('')
    async ateEvent(@Body() event){
        console.log(event);
        const newEvent = await this.eventsService.createEvent(event)

        return newEvent
    }


    

}
