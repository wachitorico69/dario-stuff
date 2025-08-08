import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobremiComponent } from './sobremi/sobremi.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'sobremi', component: SobremiComponent }
];
