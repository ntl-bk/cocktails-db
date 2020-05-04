import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [HeaderComponent, ListComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ListComponent,
    ListItemComponent
  ]
})
export class SharedModule { }
