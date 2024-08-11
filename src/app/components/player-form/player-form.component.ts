import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  @Input() player: Player = {
    name: '',
    position: '',
    team: '',
    stats: {
      gamesPlayed: 0,
      goals: 0,
      assists: 0
    }
  };

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.player.id) {
      this.playerService.updatePlayer(this.player).subscribe(() => {
        // Handle successful update
      });
    } else {
      this.playerService.addPlayer(this.player).subscribe(() => {
        // Handle successful addition
      });
    }
  }
}
