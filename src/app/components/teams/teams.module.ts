import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { TeamsComponent } from './teams.component';
import { TeamComponent } from './team/team.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { AddPlayerModalComponent } from './add-player/add-player-modal.component';

@NgModule({
  declarations: [TeamsComponent, TeamComponent, PlayerCardComponent, AddPlayerModalComponent],
  imports: [SharedModule],
  exports: [TeamsComponent]
})
export class TeamsModule {}
