import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Player } from 'src/app/models/Player';
import { PlayerDetailsModalComponent } from 'src/app/components/teams/player-details/player-details-modal.component';
import { TeamDepth } from 'src/app/models/TeamDepth';

@Component({
  selector: 'app-player-card-small',
  templateUrl: './player-card-small.component.html',
  styleUrls: ['./player-card-small.component.scss']
})
export class PlayerCardSmallComponent {
  @Input() player!: Player;
  @Input() depth!: number;
  @Input() position!: string;
  @Input() teamDepth!: TeamDepth;

  constructor(private dialog: MatDialog) {}

  openPlayerDetails() {
    this.dialog.open(PlayerDetailsModalComponent, {
      width: '40rem',
      data: {
        player: this.player,
        depth: this.depth,
        position: this.position,
        teamDepth: this.teamDepth,
      }
    });
  }
}
