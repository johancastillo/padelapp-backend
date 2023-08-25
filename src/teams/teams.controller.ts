import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {

    constructor(private readonly teamsService:TeamsService){}

    // Get All Teams
    @Get("")
    async getAllTeams(){
        const teams = await this.teamsService.getAllTeams();
        return {
            message: "Finish",
            status: "true",
            data: teams
        }
    }

    // Get Single Team
    @Get("/:id")
    async getSingleTeam(){
        return ""
    }

    // Create Team
    @Post("")
    async createTeam(@Body() team){
        console.log(team);
        const newTeam = await this.teamsService.createTeam(team);
        
        return {
            message: "",
            data: newTeam
        }
    }

    // Delete Team
    @Delete("/:id")
    async deleteTeam(@Param("id") teamID){

        console.log(teamID);
        const teamDeleted = await this.teamsService.deteleTeam(teamID)

        return {
            message: "Deleted",
            data: teamDeleted
        }
    }




}
