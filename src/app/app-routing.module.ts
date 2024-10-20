import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'team-page', component: TeamPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
