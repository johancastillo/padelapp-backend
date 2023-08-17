import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createEventDTO } from './dto/events.dto';


@Injectable()
export class EventsService {

    constructor(@InjectModel('events') private readonly eventModel:Model<createEventDTO>){}
    
    /*
    #################
    # Get All Users #
    #################
    */
    async getAllEvents(): Promise<any> {
        const users = await this.eventModel.find();
        return users
    }

    /*
    ################
    # Create Event #
    ################
    */
    async createEvent(event): Promise<any> {
        const newEvent = await new this.eventModel(event);                                                                                                                
        return newEvent;
    }


}
