import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { routes, routeComponents } from './app.routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [App, routeComponents],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}
// #enddocregion
