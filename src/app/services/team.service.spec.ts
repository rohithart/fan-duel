import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';
import { DatabaseService } from './database.service';
import { Team } from 'src/app/models/Team';

describe('TeamService', () => {
  let service: TeamService;
  let databaseService: jasmine.SpyObj<DatabaseService>;

  beforeEach(() => {
    const databaseSpy = jasmine.createSpyObj('DatabaseService', ['getTeams']);

    TestBed.configureTestingModule({
      providers: [{ provide: DatabaseService, useValue: databaseSpy }],
    });
    service = TestBed.inject(TeamService);
    databaseService = TestBed.inject(DatabaseService) as jasmine.SpyObj<DatabaseService>;
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllTeams', () => {
    let result: Team[];

    beforeEach(async () => {
      const mockTeams: Team[] = [
        { id: '1', name: 'Team 1', sport: { id: '1', name: 'Sport-1' } },
        { id: '2', name: 'Team 2', sport: { id: '2', name: 'Sport-2' } },
      ];

      databaseService.getTeams.and.returnValue(Promise.resolve(mockTeams));
      result = await service.getAllTeams();
    });

    it('should call database service', async () => {
      expect(databaseService.getTeams).toHaveBeenCalledTimes(1);
    });

    it('should return the list of teams', async () => {
      expect(result.length).toBe(2);
    });

    it('should have the expected teams', async () => {
      expect(result[0].name).toBe('Team 1');
      expect(result[1].name).toBe('Team 2');
    });
  });

  describe('#getAllTeamsFor', () => {
    let result: Team[];
    const sportId = '1';

    beforeEach(async () => {
      const mockTeams: Team[] = [
        { id: '1', name: 'Team 1', sport: { id: '1', name: 'Sport-1' } },
        { id: '2', name: 'Team 2', sport: { id: '2', name: 'Sport-2' } },
      ];

      databaseService.getTeams.and.returnValue(Promise.resolve(mockTeams));
      result = await service.getAllTeamsFor(sportId);
    });

    it('should call database service', async () => {
      expect(databaseService.getTeams).toHaveBeenCalledTimes(1);
    });

    it('should return teams for the specified sport', async () => {
      expect(result.length).toBe(1);
      expect(result[0].sport.id).toBe(sportId);
    });
  });

  describe('#getTeam', () => {
    let result: Team | undefined;
    const teamId = '1';

    beforeEach(async () => {
      const mockTeams: Team[] = [
        { id: '1', name: 'Team 1', sport: { id: '1', name: 'Sport-1' } },
        { id: '2', name: 'Team 2', sport: { id: '2', name: 'Sport-2' } },
      ];

      databaseService.getTeams.and.returnValue(Promise.resolve(mockTeams));
      result = await service.getTeam(teamId);
    });

    it('should call database service', async () => {
      expect(databaseService.getTeams).toHaveBeenCalledTimes(1);
    });

    it('should return the expected team', async () => {
      expect(result?.name).toBe('Team 1');
    });
  });
});
