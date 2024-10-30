import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { RoadMapPageComponent } from './road-map-page/road-map-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '',               component: HomePageComponent },
  { path: 'team-page',      component: TeamPageComponent },
  { path: 'road-map-page',  component: RoadMapPageComponent },
  { path: 'contact-page',   component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
