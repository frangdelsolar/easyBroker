import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';

const myComponents = [
  ToolbarComponent,
  FooterComponent,
]

@NgModule({
  declarations: [
    ...myComponents,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ...myComponents,
  ]
})
export class SharedModule { }
