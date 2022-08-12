import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesDetailComponent } from './properties-detail/properties-detail.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';



@NgModule({
  declarations: [
    PropertiesDetailComponent,
    PropertiesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
