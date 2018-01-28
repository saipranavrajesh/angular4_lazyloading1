import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Comp2Component} from './comp2.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Comp2Component}
    ])
  ],
  declarations: [Comp2Component]
})
export class Comp2Module { }
