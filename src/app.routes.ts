import { Routes } from '@angular/router';
import { Home, AppHome } from './Home';
import { Away } from './Away';
import { PageNotFound } from './NotFound';
import { getRouteComponents } from './util';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'app',
    component: AppHome,
    children: [{ path: '', component: Home }, { path: 'home', component: Home }]
  },
  { path: '**', component: PageNotFound }
];

export const routeComponents = getRouteComponents(routes);
