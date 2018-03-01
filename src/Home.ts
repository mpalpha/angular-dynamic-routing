import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    Welcome Home
  `
})
export class Home {}

@Component({
  selector: 'app-home',
  template: `
    App Home
    
    <br><br>
    
    <router-outlet></router-outlet>
  `
})
export class AppHome {}
