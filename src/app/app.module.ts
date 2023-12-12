import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClient} from '@angular/common/http';
import { ListvoitureComponent } from './componnent/listvoiture/listvoiture.component';
import { AddvoitureComponent } from './componnent/addvoiture/addvoiture.component';
import { UpdatevoitureComponent } from './componnent/updatevoiture/updatevoiture.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListvoitureComponent,
    AddvoitureComponent,
    UpdatevoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
