import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeamsService {

    constructor(@InjectModel("teams") private readonly teamsModel){}

    // Create Team
    async createTeam(team){
        const newTeam = await new this.teamsModel(team)
        return newTeam.save();
    }

    // Get All Teams
    async getAllTeams(){
        const teams = await this.teamsModel.find();
        return teams;
    }

    // Delete Team
    async deteleTeam(id){
        const teamDeleted = await this.teamsModel.findByIdAndDelete(id);
        return teamDeleted
    }

}
