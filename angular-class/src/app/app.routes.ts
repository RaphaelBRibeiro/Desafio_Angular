import { Routes } from '@angular/router';
import { loginGuard } from './guardss/login.guard';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () => {
            return import ("./pages/login/login.component")
                .then (c => c.LoginComponent)
        }
    },

    {
        path: "home",
        pathMatch: "full",
        canActivate:[loginGuard],
        loadComponent: () => {
            return import ("./pages/home/home.component")
                .then (c => c.HomeComponent)
        }
    },

    {
        path: "dashboard",
        pathMatch: "full",
        canActivate:[loginGuard],
        loadComponent: () => {
            return import ("./pages/dashboard/dashboard.component")
                .then (c => c.DashboardComponent)
        }
    },
    {
        path: "contato",
        pathMatch: "full",
        loadComponent: () => {
            return import ("./pages/contato/contato.component")
                .then (c => c.ContatoComponent)
        }
    },
    {
        path: "quem-somos",
        pathMatch: "full",
        loadComponent: () => {
            return import ("./pages/quem-somos/quem-somos.component")
                .then (c => c.QuemSomosComponent)
        }
    }
];
