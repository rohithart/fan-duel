import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/models/Player';
import { TeamDepth } from 'src/app/models/TeamDepth';

@Component({
  selector: 'app-player-details-modal',
  templateUrl: './player-details-modal.component.html',
  styleUrls: ['./player-details-modal.component.scss']
})
export class PlayerDetailsModalComponent implements OnInit {
  backups: Player[] = [];

  constructor(
    public dialogRef: MatDialogRef<PlayerDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { player: Player, depth: number, position: string, teamDepth: TeamDepth}
  ) {}

  ngOnInit(): void {
    this.getBackUps();
  }

  onYesClick(): void {
    this.dialogRef.close();
  }

  removePlayer(): void {
    this.data.teamDepth.removePlayerFromDepthChart(this.data.position, this.data.player)
    this.dialogRef.close();
  }


  private getBackUps() {
    this.backups = this.data.teamDepth.getBackups(this.data.position, this.data.player)
  }
}
