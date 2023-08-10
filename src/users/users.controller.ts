import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { createUserDTO } from './dto/users.dto';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService:UsersService){}

    /*
    #############
    # GET USERS #
    #############
    */
    @Get('')
    async getUsers(@Res() res) {
        const users = await this.usersService.getUsers()

        res.status(HttpStatus.OK).json({
            message: "received",
            data: users
        })
    }

    /*
    ###################
    # GET SINGLE USER #
    ###################
    */
    @Post('/:id')
    async getSingleUser(@Res() res, @Param('id') userID:string) {
        const user = await this.usersService.getUser(userID);

        if(!user){
            res.status(HttpStatus.OK).json({
                status: false,
                message: "El usuario no existe",
                data: {}
            })            
        }else{
            res.status(HttpStatus.OK).json({
                status: true,
                message: "received",
                data: user
            })
        }

    }

    /*
    #############
    # LOGIN #
    #############
    */
    @Get('/login')
    async login(@Res() res) {
        const users = await this.usersService.getUsers()

        res.status(HttpStatus.OK).json({
            message: "received",
            data: users
        })
    }

    /*
    ###############
    # CREATE USER #
    ###############
    */
    @Post('')
    async createUser(@Res() res, @Body() newUSer:createUserDTO){
        console.log(newUSer);

        const response = await this.usersService.createUser(newUSer);

        res.status(HttpStatus.OK).json({
            message: "Created User",
            data: response
        })
    }

    /*
    ###############
    # DELETE USER #
    ###############
    */

    // Usar @Query() para obtener parametros en las rutas
    @Delete('')
    async deleteUser(@Res() res, @Query('userID') userID){
        console.log(userID);

        const userDeleted = await this.usersService.deleteUser(userID);

        if(!userDeleted){
            return res.status(HttpStatus.OK).json({
                message: "Usuario no existe.",
                data: {}
            });
        }else{
            return res.status(HttpStatus.OK).json({
                message: "Usuario eliminado",
                data: userDeleted
            });
        }

    }

    /*
    #############
    # EDIT USER #
    #############
    */
    @Put('/:id')
    async updateUser(@Res() res, @Body() dataUser, @Param('id') userId) {
        const updateUser = await this.usersService.updateUser(userId, dataUser);

        if(!updateUser){
            return res.status(HttpStatus.OK).json({
                message: "Usuario no existe.",
                data: {}
            });
        }else{
            return res.status(HttpStatus.OK).json({
                message: "Usuario actualizado",
                data: updateUser
            });
        }
    }

}
