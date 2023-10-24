import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { DatabaseService } from './database.service';
import { Player } from '../models/Player';
import { Team } from '../models/Team';

describe('PlayerService', () => {
  let service: PlayerService;
  let databaseService: jasmine.SpyObj<DatabaseService>;

  beforeEach(() => {
    const databaseSpy = jasmine.createSpyObj('DatabaseService', ['getPlayers', 'addPlayer']);

    TestBed.configureTestingModule({
      providers: [{ provide: DatabaseService, useValue: databaseSpy }],
    });
    service = TestBed.inject(PlayerService);
    databaseService = TestBed.inject(DatabaseService) as jasmine.SpyObj<DatabaseService>;
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllPlayers', () => {
    let result: Player[];
    const teamId = '1';

    beforeEach(async () => {
      const mockPlayers: Player[] = [
        { id: '1', num: 1, name: 'Player 1', team: { id: '1'} as Team },
        { id: '2', num: 2, name: 'Player 2', team: { id: '2'} as Team },
      ];

      databaseService.getPlayers.and.returnValue(Promise.resolve(mockPlayers));
      result = await service.getAllPlayers(teamId);
    });

    it('should call database service', async () => {
      expect(databaseService.getPlayers).toHaveBeenCalledTimes(1);
    });

    it('should filter players by team ID', async () => {
      expect(result.length).toBe(1);
    });

    it('should have the expected player', async () => {
      expect(result[0].name).toBe('Player 1');
    });

    it('should have the expected team', async () => {
      expect(result[0].team.id).toBe(teamId);
    });
  })

  describe('#addPlayer', () => {
    let result: number;
    const mockPlayer: Player = { id: '3', num: 1, name: 'Player 3', team: {} as Team };

    beforeEach(async () => {
      databaseService.addPlayer.and.returnValue(Promise.resolve(1));
      result = await service.addPlayer(mockPlayer);

    })

    it('should call database service', async () => {
      expect(databaseService.addPlayer).toHaveBeenCalledTimes(1);
    });

    it('should add a player', async () => {
      expect(result).toEqual(1);
    });
  })
});
