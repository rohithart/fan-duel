import { Injectable } from '@angular/core';

import { DatabaseService } from 'src/app/services/database.service';
import { Player } from 'src/app/models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private databaseService: DatabaseService) {}

  async getAllPlayers(teamId: string): Promise<Player[]> {
    const allPlayers = await this.databaseService.getPlayers();
    return allPlayers.filter((player) => player.team.id === teamId);
  }

  async addPlayer(player: Player) {
    return this.databaseService.addPlayer(player)
  }
}
