import { Injectable } from '@angular/core';

import { Sport } from 'src/app/models/Sport';
import { DatabaseService } from 'src/app/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private databaseService: DatabaseService) {}

  async getAllSports(): Promise<Sport[]> {
    return this.databaseService.getSports();
  }

  async getSport(sportId: string): Promise<Sport | undefined> {
    const allTeams = await this.databaseService.getSports();
    return allTeams.find((sport) => sport.id === sportId);
  }
}
