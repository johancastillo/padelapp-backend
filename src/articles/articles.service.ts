import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/articles.interface';

@Injectable()
export class ArticlesService {

    constructor(@InjectModel('articles') private readonly articlesModel){}


    // Create Article
    async createArticle(article:Article){
        const newArticle = await new this.articlesModel(article);
        return newArticle.save();
    }

    // Get All Articles
    async getAllArticles(){
        const articles = await this.articlesModel.find();
        return articles;
    }

}
