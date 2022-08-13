import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


const myComponents = [
  ToolbarComponent,
  FooterComponent,
]

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [
    ...myComponents,
  ],
  imports: [
    CommonModule, 
    ...materialModules
  ], 
  exports: [
    ...myComponents,
    ...materialModules
  ]
})
export class SharedModule { }
