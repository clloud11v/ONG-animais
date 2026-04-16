import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'adotar',
    loadComponent: () => import('./adotar/adotar').then(m => m.Adotar)
  },
  {
    path: 'contato',
    loadComponent: () => import('./contato/contato').then(m => m.Contato)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
