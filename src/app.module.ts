import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [UsersModule, EventsModule, RankingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
