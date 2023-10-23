import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should define #getSports', () => {
    expect(service.getSports).toBeDefined();
  });

  it('should define #getTeams', () => {
    expect(service.getTeams).toBeDefined();
  });

  it('should define #getPlayers', () => {
    expect(service.getPlayers).toBeDefined();
  });

  it('should define #addPlayer', () => {
    expect(service.addPlayer).toBeDefined();
  });
});
