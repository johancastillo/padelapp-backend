import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsController } from './events.controller';
import { eventsSchema } from './schemas/events.schema';
import { EventsService } from './events.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'events', schema: eventsSchema}
    ])
  ],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
