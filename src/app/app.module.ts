import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Comp1Component} from './comp1/comp1.component';
import {RouterModule, Routes} from '@angular/router';

const rootRoutes: Routes = [
  {path: '', redirectTo: '/comp1', pathMatch: 'full'},
  {path: 'comp1', component: Comp1Component},

  {path: 'comp2',  loadChildren: './comp2/comp2.module#Comp2Module'}
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
