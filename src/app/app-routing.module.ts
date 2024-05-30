import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InterestingLinksComponent } from './interesting-links/interesting-links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BooksComponent } from './interesting-links/books/books.component';
// import { ArtsComponent } from './interesting-links/arts/arts.component';
import { VideosComponent } from './interesting-links/videos/videos.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { CertsComponent } from './resume-page/certs/certs.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'aboutme', component:AboutMeComponent},
  { path:'interesting-links', component:InterestingLinksComponent,
    children: [
      { path: 'links', component:BooksComponent},
      // { path: 'arts', component:ArtsComponent},
      { path: 'videos', component:VideosComponent}
    ]},
    { path: 'resume-page', component:ResumePageComponent
      ,children:[
        {path: 'certs', component:CertsComponent}
      ]
    },
  { path: '**', pathMatch:'full', component: PageNotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
