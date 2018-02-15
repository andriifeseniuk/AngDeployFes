import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { JoinComponent } from './components/join/join.component'
import { CrudApi } from './services/crudApi';
import { JoinApi } from './services/joinApi';
import { ModelsConvertingService } from './services/modelsConvertingService';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TableModule,
    ButtonModule,
    FormsModule,
    HttpModule
  ],
  providers: [CrudApi, JoinApi, ModelsConvertingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
