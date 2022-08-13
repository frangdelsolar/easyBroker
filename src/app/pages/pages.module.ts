import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesDetailComponent } from './properties-detail/properties-detail.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { SharedModule } from '../shared/shared.module';
import { PropertyBoxComponent } from './properties-list/components/property-box/property-box.component';



@NgModule({
  declarations: [
    PropertiesDetailComponent,
    PropertiesListComponent,
    PropertyBoxComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ]
})
export class PagesModule { }
