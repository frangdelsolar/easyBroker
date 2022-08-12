import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesDetailComponent } from './pages/properties-detail/properties-detail.component';
import { PropertiesListComponent } from './pages/properties-list/properties-list.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesListComponent
  },
  {
    path: ':id',
    component: PropertiesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
