import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BadgeModule } from 'primeng/badge';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const myComponents = [
  ContactFormComponent,
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
  BadgeModule,
  GalleriaModule,
  InputTextModule,
  InputTextareaModule,
]

@NgModule({
  declarations: [
    ...myComponents,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
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
