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
import { ResultsModule } from './results/results.module';
import { CategoriesModule } from './categories/categories.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { ImagesModule } from './images/images.module';
import { PasswordsModule } from './passwords/passwords.module';
import { env, mongoUri } from 'config';
import { TeamsModule } from './teams/teams.module';


@Module({
  imports: [UsersModule, EventsModule, RankingModule, 
    MongooseModule.forRoot(mongoUri[env]), ArticlesModule, AdminModule, InscriptionsModule, TasksModule, ResultsModule, CategoriesModule, SponsorsModule, ImagesModule, PasswordsModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
