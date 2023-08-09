import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { RankingModule } from './ranking/ranking.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule, EventsModule, RankingModule, MongooseModule.forRoot(`mongodb+srv://jcjohan:password2707@tucanisport.rdetp.mongodb.net/padelapp`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
