import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {

    // Get All articles
    @Get('')
    async getAllArticles(){
        
        return {
            status: true,
            message: 'Articles'
        }
    }


    // Create Article
    @Post('')
    async createArticle(){
        
        return {
            status: true,
            message: 'Create Article'
        }
    }

    // Edit Article
    @Put('')
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
