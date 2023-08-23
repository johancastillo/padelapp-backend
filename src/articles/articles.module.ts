import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { articlesSchema } from './schema/articles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'articles', schema: articlesSchema}
    ])
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
