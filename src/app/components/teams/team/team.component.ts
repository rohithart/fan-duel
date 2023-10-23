import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { Team } from 'src/app/models/Team';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { AddPlayerModalComponent } from '../add-player/add-player-modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamId = '';
  team!: Team;
  players: Player[] = [];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private teamsService: TeamService,
    private playerService: PlayerService) {}

  ngOnInit(): void {
    this.teamId = this.route.snapshot.params['id'] || '';
    this.refresh();
  }

  refresh() {
    this.getData();
  }

  addPlayer() {
    const dialogRef = this.dialog.open(AddPlayerModalComponent, {
      width: '40rem',
      data: {
        team: this.team,
      }
    });

    dialogRef.afterClosed().subscribe((result: Player) => {
      if (result) {
        this.playerService.addPlayer(result).then(() => this.getPlayers(this.team));
      }
    });
  }

  private getData() {
    this.teamsService.getTeam(this.teamId).then((team) => {
      if(team != null) {
        this.team = team;
        this.getPlayers(team);
      }
    })
  }

  private getPlayers(team: Team) {
    this.playerService.getAllPlayers(team.id).then((data) => {
      this.players = data;
    })
  }
}
