import { Player } from './Player';
import { Team } from './Team';

export class Depth {
  id: string;
  team: Team;
  position?: string;
  player?: Player;
  depth?: number;

  constructor(id: string, team: Team) {
    this.id = id;
    this.team = team;
  }

  setDepth(position: string, player: Player, depth: number) {
    this.position = position;
    this.player = player;
    this.depth = depth;
  }
}
