import { Module } from '@nestjs/common';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';
import { MongooseModule } from '@nestjs/mongoose';
import { rankingSchema } from './schemas/ranking.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: "ranking", schema: rankingSchema}
        ])
    ],
    controllers: [RankingController],
    providers: [RankingService]
})
export class RankingModule {}
