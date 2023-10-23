import { TestBed } from '@angular/core/testing';

import { SportService } from './sport.service';
import { DatabaseService } from './database.service';
import { Sport } from 'src/app/models/Sport';

describe('SportService', () => {
  let service: SportService;
  let databaseService: jasmine.SpyObj<DatabaseService>;

  beforeEach(() => {
    const databaseSpy = jasmine.createSpyObj('DatabaseService', ['getSports']);

    TestBed.configureTestingModule({
      providers: [{ provide: DatabaseService, useValue: databaseSpy }],
    });
    service = TestBed.inject(SportService);
    databaseService = TestBed.inject(DatabaseService) as jasmine.SpyObj<DatabaseService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllSports', () => {
    let result: Sport[];

    beforeEach(async () => {
      const mockSports: Sport[] = [
        { id: '1', name: 'Sport 1' },
        { id: '2', name: 'Sport 2' },
      ];

      databaseService.getSports.and.returnValue(Promise.resolve(mockSports));
      result = await service.getAllSports();
    });

    it('should call database service', async () => {
      expect(databaseService.getSports).toHaveBeenCalledTimes(1);
    });

    it('should return the list of sports', async () => {
      expect(result.length).toBe(2);
    });

    it('should have the expected sports', async () => {
      expect(result[0].name).toBe('Sport 1');
      expect(result[1].name).toBe('Sport 2');
    });
  });

  describe('#getSport', () => {
    let result: Sport | undefined;
    const sportId = '1';

    beforeEach(async () => {
      const mockSports: Sport[] = [
        { id: '1', name: 'Sport 1' },
        { id: '2', name: 'Sport 2' },
      ];

      databaseService.getSports.and.returnValue(Promise.resolve(mockSports));
      result = await service.getSport(sportId);
    });

    it('should call database service', async () => {
      expect(databaseService.getSports).toHaveBeenCalledTimes(1);
    });

    it('should return the expected sport', async () => {
      expect(result?.name).toBe('Sport 1');
    });
  });
});
