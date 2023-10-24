import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { Player } from 'src/app/models/Player';
import { Team } from 'src/app/models/Team';
import { PlayerCardSmallComponent } from './player-card-small.component';


describe('PlayerCardSmallComponent', () => {
  let component: PlayerCardSmallComponent;
  let fixture: ComponentFixture<PlayerCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ PlayerCardSmallComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { id: '123' } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCardSmallComponent);
    component = fixture.componentInstance;
    component.player = new Player('', 10, 'Name', {} as Team);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
