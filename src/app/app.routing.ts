import { Routes } from '@angular/router'

import { AppComponent} from './app.component'
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { JoinComponent } from './components/join/join.component';

export const appRoutes:Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'join/:joinType', component: JoinComponent }
]