import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LazyHome } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LazyHome }])
  ],
  declarations: [LazyHome]
})
export class LazyModule {}
