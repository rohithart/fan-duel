import { Depth } from './Depth';
import { Player } from './Player';
import { Team } from './Team';

export class TeamDepth {
  id: string;
  team: Team;
  position?: string;
  player?: Player;
  depth: Depth[];

  constructor(id: string, team: Team) {
    this.id = id;
    this.team = team;
    this.depth = []
  }

  addToDepth(depth: Depth) {
    this.depth.push(depth);
  }
}
