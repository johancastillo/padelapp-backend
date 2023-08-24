import { Module } from '@nestjs/common';
import { SponsorsController } from './sponsors.controller';
import { SponsorsService } from './sponsors.service';
import { MongooseModule } from '@nestjs/mongoose';
import { sponsorsSchema } from './schemas/sponsors.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "sponsors", schema: sponsorsSchema}
    ])
  ],
  controllers: [SponsorsController],
  providers: [SponsorsService]
})
export class SponsorsModule {}
