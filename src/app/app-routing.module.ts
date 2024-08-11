import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';

const routes: Routes = [

  { path: 'players', component: PlayerListComponent },        // List players
  { path: 'players/add', component: PlayerFormComponent },    // Add a new player
  { path: 'players/edit/:id', component: PlayerFormComponent },  // Edit an existing player
  { path: '', redirectTo: '/players', pathMatch: 'full' },  // Default route
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
