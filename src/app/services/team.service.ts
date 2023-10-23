import { Injectable } from '@angular/core';

import { DatabaseService } from 'src/app/services/database.service';
import { Team } from 'src/app/models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private databaseService: DatabaseService) {}

  async getAllTeams(): Promise<Team[]> {
    return await this.databaseService.getTeams();
  }

  async getAllTeamsFor(sportId: string): Promise<Team[]> {
    const allTeams = await this.databaseService.getTeams();
    return allTeams.filter((team) => team.sport.id === sportId);
  }

  async getTeam(teamId: string): Promise<Team | undefined> {
    const allTeams = await this.databaseService.getTeams();
    return allTeams.find((team) => team.id === teamId);
  }
}
