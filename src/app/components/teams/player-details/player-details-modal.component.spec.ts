import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { SharedModule } from 'src/app/shared/modules/shared.module';
import { Player } from 'src/app/models/Player';
import { Team } from 'src/app/models/Team';
import { PlayerDetailsModalComponent } from './player-details-modal.component';
import { TeamDepth } from 'src/app/models/TeamDepth';

describe('PlayerDetailsModalComponent', () => {
  let component: PlayerDetailsModalComponent;
  let fixture: ComponentFixture<PlayerDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, NoopAnimationsModule ],
      declarations: [ PlayerDetailsModalComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { player: {'name': 'player-name', team: {}} as Player, teamDepth: new TeamDepth('', {} as Team)} },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
