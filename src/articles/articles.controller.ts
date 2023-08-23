import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {

    constructor(private readonly articlesService: ArticlesService){}

    // Get All articles
    @Get('')
    async getAllArticles(){
        
        const articles = await this.articlesService.getAllArticles()
        
        return {
            status: true,
            message: 'Articles',
            articles: articles,
        }
    }


    // Create Article
    @Post('')
    async createArticle(@Body() article){
        
        console.log(article);

        const newArticle = await this.articlesService.createArticle(article);

        return {
            status: true,
            message: 'Create Article',
            article: newArticle
        }
    }

    // Edit Article
    @Put('/:id')
    async editArticle(){
        

        return {
            status: true,
            message: 'Edit Article'
        }
    }


    // Delete Article
    @Delete('')
    async deleteArticle(){
        
        return {
            status: true,
            message: 'Delete Article'
        }
    }


}
