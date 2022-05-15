import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { HowtohelpComponent } from './pages/howtohelp/howtohelp.component';


const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'aboutus', component:AboutusComponent
  },
  {
    path:'howtohelp', component:HowtohelpComponent 
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
