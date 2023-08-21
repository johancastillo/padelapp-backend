import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { categoriesSchema } from './schemas/categories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'categories', schema: categoriesSchema}
    ])
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
