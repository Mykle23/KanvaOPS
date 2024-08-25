import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/templates/login/login.component';
import { NotFoundComponent } from './components/templates/not-found/not-found.component';
import { MembersBoardsViewComponent } from './components/templates/members-boards-view/members-boards-view.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'boards', component: MembersBoardsViewComponent },
  { path: '**', component: NotFoundComponent },
];
