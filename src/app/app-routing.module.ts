import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InterestingLinksComponent } from './interesting-links/interesting-links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import {hom}

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'aboutme', component:AboutMeComponent},
  { path:'interesting-links', component:InterestingLinksComponent},
  { path: '**', pathMatch:'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
