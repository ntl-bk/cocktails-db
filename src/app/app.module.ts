import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {CatalogComponent} from './modules/catalog/page/catalog.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule) },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled'
    }),
    SharedModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
