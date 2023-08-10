import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDTO } from './dto/users.dto';
import {User} from "./interfaces/users.interface"


@Injectable()
export class UsersService {
    
    constructor(@InjectModel('users') private readonly userModel:Model<createUserDTO>){

    }

    /*
    #################
    # Get All Users #
    #################
    */
    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users
    }

    /*
    ###################
    # Get Single User #
    ###################
    */
    async getUser(userId:string):Promise<User>{
        const user = await this.userModel.findById(userId);
        return user;
    }

    /*
    ###################
    # Create New User #
    ###################
    */
    async createUser(newUser:createUserDTO): Promise<User>{
        // Create
        const user = await new this.userModel(newUser);
        
        // Save
        return await user.save();
    }

    /*
    ###############
    # Update User #
    ###############
    */
    async updateUser(userId:string, dataUser:createUserDTO):Promise<User>{
         const updateUser = await this.userModel.findByIdAndUpdate(userId, dataUser, {new: true});
        return updateUser;
    }

    /*
    ###############
    # Delete User #
    ###############
    */
    async deleteUser(userId:string):Promise<User>{
        const deleteUser = await this.userModel.findByIdAndDelete(userId);
        return deleteUser;
    }

}
