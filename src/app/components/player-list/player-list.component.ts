import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getPlayers().subscribe((players) => {
      this.players = players;
    });
  }

  editPlayer(player: Player): void {
    // Logic for editing player (open form with pre-filled data)
  }

  deletePlayer(id: string): void {
    this.playerService.deletePlayer(id).subscribe(() => {
      this.loadPlayers();
    });
  }

  loadTopScorers(): void {
    this.playerService.queryTopScorers().subscribe((players) => {
      this.players = players;
    });
  }
}
