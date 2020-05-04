import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { CatalogComponent } from './page/catalog.component';
import {RouterModule, Routes} from '@angular/router';

const AnimalsCatalogRoutes: Routes = [
  { path: '', component: CatalogComponent }
];

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(AnimalsCatalogRoutes),
  ],
  exports: [RouterModule]
})
export class CatalogModule {}
