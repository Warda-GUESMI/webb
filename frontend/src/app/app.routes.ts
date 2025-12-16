import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import { CommandeListComponent } from './commandes/commande-list/commande-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/nouveau', component: ArticleFormComponent },
  { path: 'articles/modifier/:id', component: ArticleFormComponent },
  { path: 'commandes', component: CommandeListComponent },
  { path: '**', redirectTo: '/login' }
];