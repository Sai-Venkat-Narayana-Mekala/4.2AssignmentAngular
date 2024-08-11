export interface Player {
    id?: string;
    name: string;
    position: string;
    team: string;
    stats: {
      gamesPlayed: number;
      goals: number;
      assists: number;
    };
  }
  