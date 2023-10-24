import { Player } from './Player';
import { Team } from './Team';
import { TeamDepth } from './TeamDepth';

describe('TeamDepth', () => {
  let teamDepth: TeamDepth;
  let player1: Player;
  let player2: Player;
  let player3: Player;
  let player4: Player;

  beforeEach(() => {
    player1 = new Player('1', 1, 'Player 1', {} as Team);
    player2 = new Player('2', 2, 'Player 2', {} as Team);
    player3 = new Player('3', 3, 'Player 3', {} as Team);
    player4 = new Player('4', 3, 'Player 4', {} as Team);
  });

  describe('#addPlayerToDepthChart', () => {
    beforeEach(() => {
      teamDepth = new TeamDepth('1', {} as Team);
    })
    describe('when there is no position_depth', () => {
      describe('when depth chart is empty', () => {
        let depthChart: any;
        beforeEach(() => {
          teamDepth.addPlayerToDepthChart('QB', player1);
          depthChart = teamDepth.depthChart.get('QB') || [];
        })

        it('should add player to depth chart', () => {
          expect(depthChart.length).toBe(1);
          expect(depthChart[0]).toEqual(player1);
        });
      })

      describe('when depth chart is not empty', () => {
        let depthChart: any;
        beforeEach(() => {
          teamDepth.addPlayerToDepthChart('QB', player2, 2);
          teamDepth.addPlayerToDepthChart('QB', player1);
          depthChart = teamDepth.depthChart.get('QB') || [];
        })

        it('should add player to the bottom depth chart', () => {
          expect(depthChart.length).toBe(2);
          expect(depthChart[1]).toEqual(player1);
        });
      })

      describe('when there are multiple players without position_depth', () => {
        let depthChart: any;
        beforeEach(() => {
          teamDepth.addPlayerToDepthChart('QB', player1, 1);
          teamDepth.addPlayerToDepthChart('QB', player2);
          teamDepth.addPlayerToDepthChart('QB', player3);
          depthChart = teamDepth.depthChart.get('QB') || [];
        })

        it('should add last player2 to bottom of depth chart', () => {
          expect(depthChart.length).toBe(3);
          expect(depthChart[1]).toEqual(player2);
        });

        it('should add player3 to bottom of depth chart', () => {
          expect(depthChart.length).toBe(3);
          expect(depthChart[2]).toEqual(player3);
        });
      })
    })

    describe('when position_depth is defined', () => {
      let depthChart: any;
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1, 1);
        teamDepth.addPlayerToDepthChart('QB', player2, 2);
        teamDepth.addPlayerToDepthChart('QB', player3, 3);
        depthChart = teamDepth.depthChart.get('QB') || [];

      })

      it('should add player1 at the top of depth chart', () => {
        expect(depthChart.length).toBe(3);
        expect(depthChart[0]).toEqual(player1);
      });

      it('should add player2 in position 1 to depth chart', () => {
        expect(depthChart.length).toBe(3);
        expect(depthChart[1]).toEqual(player2);
      });

      it('should add player3 to the bottom of depth chart', () => {
        expect(depthChart.length).toBe(3);
        expect(depthChart[2]).toEqual(player3);
      });
    })

    describe('when player is added again', () => {
      let depthChart: any;
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1, 1);
        teamDepth.addPlayerToDepthChart('QB', player2, 2);
        teamDepth.addPlayerToDepthChart('QB', player1, 3);
        depthChart = teamDepth.depthChart.get('QB') || [];

      })

      it('should add player2 at the top of depth chart', () => {
        expect(depthChart.length).toBe(2);
        expect(depthChart[0]).toEqual(player2);
      });

      it('should add player1 in position 1 to depth chart', () => {
        expect(depthChart.length).toBe(2);
        expect(depthChart[1]).toEqual(player1);
      });
    })

    describe('when position_depth is defined outbound', () => {
      let depthChart: any;
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1, 3);
        teamDepth.addPlayerToDepthChart('QB', player2, 3);
        teamDepth.addPlayerToDepthChart('QB', player3, 2);
        teamDepth.addPlayerToDepthChart('QB', player4, 2);
        depthChart = teamDepth.depthChart.get('QB') || [];

      })

      it('should add player1 at the top of depth chart', () => {
        expect(depthChart.length).toBe(4);
        expect(depthChart[0]).toEqual(player1);
      });

      it('should add player2 in position 2 to depth chart', () => {
        expect(depthChart.length).toBe(4);
        expect(depthChart[2]).toEqual(player2);
      });

      it('should add player3 to the bottom of depth chart', () => {
        expect(depthChart.length).toBe(4);
        expect(depthChart[3]).toEqual(player3);
      });

      it('should add player4 inserted into second position of depth chart', () => {
        expect(depthChart.length).toBe(4);
        expect(depthChart[1]).toEqual(player4);
      });
    })

    describe('when position_depth is same', () => {
      let depthChart: any;
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player3, 1);
        teamDepth.addPlayerToDepthChart('QB', player2, 1);
        teamDepth.addPlayerToDepthChart('QB', player1, 1);
        depthChart = teamDepth.depthChart.get('QB') || [];
      })

      it('should add player1 at the top of depth chart', () => {
        expect(depthChart.length).toBe(3);
        expect(depthChart[0]).toEqual(player1);
      });

      it('should add player3 is added after player1 depth chart', () => {
        expect(depthChart.length).toBe(3);
        expect(depthChart[1]).toEqual(player3);
      });

      it('should add player2 to the bottom of depth chart', () => {
        expect(depthChart.length).toBe(3);
        expect(depthChart[2]).toEqual(player2);
      });
    })
  })

  describe('#removePlayerFromDepthChart', () => {
    beforeEach(() => {
      teamDepth = new TeamDepth('1', {} as Team);
    })
    describe('when there are players', () => {
      let depthChart: any;
      let removedPlayer: any;
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1);
        teamDepth.addPlayerToDepthChart('QB', player2);
        removedPlayer = teamDepth.removePlayerFromDepthChart('QB', player1);
        depthChart = teamDepth.depthChart.get('QB') || [];
      })

      it('should remove player from depth chart', () => {
        expect(removedPlayer).toEqual(player1);
        expect(depthChart.length).toBe(1);
        expect(depthChart[0]).toEqual(player2);
      });
    })

    describe('when there are no players', () => {
      let removedPlayer: any;
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1);
        teamDepth.addPlayerToDepthChart('QB', player2);
        removedPlayer = teamDepth.removePlayerFromDepthChart('C', player1);
      })

      it('should not remove player from empty depth chart', () => {
        expect(removedPlayer).toEqual([]);
      });
    })

    describe('when there are no players in the position', () => {
      let removedPlayer: any;
      beforeEach(() => {
        removedPlayer = teamDepth.removePlayerFromDepthChart('QB', player1);
      })

      it('should not remove player from empty depth chart', () => {
        expect(removedPlayer).toEqual([]);
      });
    })

    describe('when the player doesn\'t exist in the depth', () => {
      let removedPlayer: any;
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1);
        removedPlayer = teamDepth.removePlayerFromDepthChart('QB', player2);
      })

      it('should not remove player not in depth chart', () => {
        expect(removedPlayer).toEqual([]);
      });
    })
  })

  describe('#getBackups', () => {
    beforeEach(() => {
      teamDepth = new TeamDepth('1', {} as Team);
    })

    describe('when a player exists', () => {
      let backups: Player[];
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1, 1);
        teamDepth.addPlayerToDepthChart('QB', player2, 2);
        teamDepth.addPlayerToDepthChart('QB', player3, 3);
        backups = teamDepth.getBackups('QB', player1);
      })

      it('should get backups for a player', () => {
        expect(backups.length).toBe(2);
        expect(backups[0]).toEqual(player2);
      });
    })

    describe('when a player doesn\'t exist', () => {
      let backups: Player[];
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1, 2);
        teamDepth.addPlayerToDepthChart('QB', player2, 1);
        teamDepth.addPlayerToDepthChart('QB', player3, 3);
        backups = teamDepth.getBackups('QB', player4);
      })

      it('should not get backups for a player not in depth chart', () => {
        expect(backups.length).toBe(0);
      });
    })

    describe('when depth chart is empty', () =>{
      let backups: Player[];
      beforeEach(() => {
        backups = teamDepth.getBackups('QB', player1);
      })

      it('should not get backups', () => {
        expect(backups.length).toBe(0);
      });
    })

    describe('when position in depth chart is empty', () =>{
      let backups: Player[];
      beforeEach(() => {
        teamDepth.addPlayerToDepthChart('QB', player1, 2);
        teamDepth.addPlayerToDepthChart('QB', player2, 1);
        backups = teamDepth.getBackups('C', player1);
      })

      it('should not get backups', () => {
        expect(backups.length).toBe(0);
      });
    })
  })
});
