import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

import { GalleriaModule } from 'primeng/galleria';


const myComponents = [
  FooterComponent,
  GalleryComponent,
  ToolbarComponent,
]

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatToolbarModule
]

const primeNGModules = [
  GalleriaModule
]

@NgModule({
  declarations: [
    ...myComponents,
  ],
  imports: [
    CommonModule, 
    ...materialModules,
    ...primeNGModules,
  ], 
  exports: [
    ...myComponents,
    ...materialModules,
    ...primeNGModules,

  ]
})
export class SharedModule { }
