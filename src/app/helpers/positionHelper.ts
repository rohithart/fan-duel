import { nfl, soccer } from 'src/app/data/sports';
import { Team } from 'src/app/models/Team';
import { NFL_POSITION } from 'src/app/enums/nfl_position';
import { SOCCER_POSITION } from '../enums/soccer_position';

export function getPositionsOf(team: Team): string[] {
  switch (team.sport.id) {
    case soccer.id:
      return Object.values(SOCCER_POSITION).sort()
    case nfl.id:
      return Object.values(NFL_POSITION).sort()
    default:
      return [];
  }
}
