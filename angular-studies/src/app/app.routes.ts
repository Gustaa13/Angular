import { Routes } from '@angular/router';

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
        loadComponent: () => import('./pages/firstProject/component11').then(m => m.Component11)
    }
];
