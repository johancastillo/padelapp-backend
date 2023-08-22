import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { imagesSchema } from './schemas/images.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'images', schema: imagesSchema}
    ])
  ],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
