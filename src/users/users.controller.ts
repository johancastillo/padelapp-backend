import { Controller, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('')
    getUsers(@Res() res) {
        res.status(HttpStatus.OK).json({
            message: "received"
        })
    }

}
