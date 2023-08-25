import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { teamsSchema } from './schemas/teams.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "teams", schema: teamsSchema}
    ])
  ],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}
