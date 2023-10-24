import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { Team } from 'src/app/models/Team';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { AddPlayerModalComponent } from '../add-player/add-player-modal.component';
import { AddDepthModalComponent } from '../add-depth/add-depth-modal.component';
import { TeamDepth } from 'src/app/models/TeamDepth';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamId = '';
  team!: Team;
  depth!: TeamDepth;
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

  playerSelected(player: Player) {
    const dialogRef = this.dialog.open(AddDepthModalComponent, {
      width: '40rem',
      data: {
        player: player,
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.depth.addPlayerToDepthChart(result.position, player, result.depth)
      }
    });
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
        this.initDepth();
      }
    })
  }

  private initDepth() {
    this.depth = new TeamDepth('1', this.team);
  }

  private getPlayers(team: Team) {
    this.playerService.getAllPlayers(team.id).then((data) => {
      this.players = data;
    })
  }
}
