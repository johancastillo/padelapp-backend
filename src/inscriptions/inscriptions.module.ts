import { Module } from '@nestjs/common';
import { InscriptionsService } from './inscriptions.service';
import { InscriptionsController } from './inscriptions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { inscriptionsSchema } from './schema/inscriptions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: "inscriptions", schema: inscriptionsSchema}
    ])
  ],
  providers: [InscriptionsService],
  controllers: [InscriptionsController]
})
export class InscriptionsModule {}
