import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { TeamsComponent } from './teams.component';
import { TeamComponent } from './team/team.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { AddPlayerModalComponent } from './add-player/add-player-modal.component';
import { AddDepthModalComponent } from './add-depth/add-depth-modal.component';
import { DepthTableComponent } from './depth-table/depth-table.component';
import { PlayerCardSmallComponent } from './player-card-small/player-card-small.component';
import { PlayerDetailsModalComponent } from './player-details/player-details-modal.component';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent,
    PlayerCardComponent,
    AddPlayerModalComponent,
    AddDepthModalComponent,
    DepthTableComponent,
    PlayerCardSmallComponent,
    PlayerDetailsModalComponent,
  ],
  imports: [SharedModule],
  exports: [TeamsComponent]
})
export class TeamsModule {}
