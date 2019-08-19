import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClimaComponent } from './pages/dashboard/clima/clima.component';
import { FormularioComponent } from './pages/dashboard/formulario/formulario.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'mapa', component: MapaComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
