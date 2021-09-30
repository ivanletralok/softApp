import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MonitorAsignadoComponent } from './components/monitor-asignado/monitor-asignado.component';
import { MonitoresComponent } from './components/monitores/monitores.component';

const routes: Routes = [

  
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'monitores',
    component:MonitoresComponent
  },

  {
    path:'monitoresAsignado',
    component:MonitorAsignadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
