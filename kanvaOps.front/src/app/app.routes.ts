import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/templates/login/login.component';
import { NotFoundComponent } from './components/templates/not-found/not-found.component';
import { BoardComponent } from './components/templates/board/board.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
