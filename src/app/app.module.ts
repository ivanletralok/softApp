import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  

import { DataWebService } from './services/dataWebService';
import { MonitoresComponent } from './components/monitores/monitores.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonitorAsignadoComponent } from './components/monitor-asignado/monitor-asignado.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MonitoresComponent,
    MonitorAsignadoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    InMemoryWebApiModule.forRoot(DataWebService),
         NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
