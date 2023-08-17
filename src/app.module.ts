import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { RankingModule } from './ranking/ranking.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { AdminModule } from './admin/admin.module';
import { InscriptionsModule } from './inscriptions/inscriptions.module';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [UsersModule, EventsModule, RankingModule, MongooseModule.forRoot(`mongodb+srv://jcjohan:password2707@tucanisport.rdetp.mongodb.net/padelapp`), ArticlesModule, AdminModule, InscriptionsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
