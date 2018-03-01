import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['/']">Home</a> | 
    <a [routerLink]="['/app/home']">App Home</a> |
    <a [routerLink]="['/app/lazy']">App Lazy</a>
    
    <hr>
    <button (click)="addRoutes()">Add Routes</button>
    
    <hr>
    <router-outlet></router-outlet>
  `
})
export class App {
  loaded: boolean = false;
  constructor(private router: Router) {}

  addRoutes() {
    let routerConfig = this.router.config;

    if (!this.loaded) {
      routerConfig[1].children.push({
        path: `lazy`,
        loadChildren: 'app/lazy.module#LazyModule'
      });

      this.router.resetConfig(routerConfig);
      this.loaded = true;
    }
  }
}
