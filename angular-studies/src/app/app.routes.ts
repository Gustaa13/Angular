import { Routes } from '@angular/router';
import { routeGuard } from './authentication/route-guard';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        title: 'Principal',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },

    {
        path: 'estudos',
        title: 'Estudos',
        loadComponent: () => import('./pages/studies/component00').then(m => m.Component00)
    },

    {
        path: 'primeiro-projeto',
        title: 'Primeiro projeto',
        loadComponent: () => import('./pages/firstProject/component11').then(m => m.Component11),
        canActivate: [routeGuard]
    }, 

    {
        path: 'segundo-projeto',
        title: 'Segundo projeto',
        loadComponent: () => import('./pages/secondProject/component13').then(m => m.Component13)
    },

    {
        path: '**', 
        title: 'Página de erro',
        loadComponent: () => import('./pages/errorPage/component16').then(m => m.Component16)
    }
];
