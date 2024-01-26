import {Routes} from '@angular/router';
import {LoginComponent} from './components/content/login/login.component';
import {RegisterComponent} from './components/content/register/register.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {JournalComponent} from "./components/content/journal/journal.component";
import {DashboardComponent} from './components/content/dashboard/dashboard.component';
import {InfoComponent} from './components/content/info/info.component';
import {ChartsComponent} from "./components/content/charts/charts.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'info', component: InfoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'charts', component: ChartsComponent}
];
