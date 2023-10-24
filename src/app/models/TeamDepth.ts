import { Player } from './Player';
import { Team } from './Team';

export class TeamDepth {
  id: string;
  team: Team;
  depthChart;

  constructor(id: string, team: Team) {
    this.id = id;
    this.team = team;
    this.depthChart = new Map();
  }

  addPlayerToDepthChart(position: string, player: Player, position_depth?: number) {
    if(!this.depthChart.has(position)) {
      this.depthChart.set(position, [player]);
    }
    else {
      const players: Player[] = this.removePlayerIfAlreadyExists(position, player);

      if (position_depth === undefined || position_depth < 1 || position_depth >= players.length) {
        players.push(player);
      } else {
        players.splice(position_depth - 1, 0, player);
      }
    }
  }

  removePlayerFromDepthChart(position: string, player: Player): Player | Player[] {
    if (this.depthChart.has(position)) {
      const positionDepthChart = this.depthChart.get(position);
      const playerIndex = positionDepthChart?.findIndex((node: Player) => node === player);

      if (playerIndex >= 0) {
        return positionDepthChart.splice(playerIndex, 1)[0];
      }
    }
    return [];
  }

  getBackups(position: string, player: Player): Player[] {
    if (this.depthChart.has(position)) {
      const positionDepthChart = this.depthChart.get(position);
      const playerIndex = positionDepthChart?.findIndex((node: Player) => node === player);

      if (playerIndex >= 0) {
        return positionDepthChart.slice(playerIndex+1)
      }
    }

    return [];
  }

  private removePlayerIfAlreadyExists(position: string, player: Player): Player[] {
    const players: Player[] = this.depthChart.get(position);
    const playerIndex = players.findIndex((p: Player) => p.id == player.id);

    if(playerIndex != -1) {
      players.splice(playerIndex, 1);
    }

    return players;
  }
}
