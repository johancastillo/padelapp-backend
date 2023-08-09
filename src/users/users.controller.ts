import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
 import { createUserDTO } from './dto/users.dto';

@Controller('users')
export class UsersController {
    @Get('')
    getUsers(@Res() res) {
        res.status(HttpStatus.OK).json({
            message: "received"
        })
    }

    /*
    ###############
    # CREATE USER #
    ###############
    */
    @Post('')
    createUser(@Res() res, @Body() newUSer:createUserDTO){
        console.log(newUSer);

        res.status(HttpStatus.OK).json({
            message: "Created User"
        })
    }

}
