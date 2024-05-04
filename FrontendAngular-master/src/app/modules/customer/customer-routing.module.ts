import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './customer-components/dashboard/dashboard.component';
import { AddCategoryComponent } from './customer-components/add-category/add-category.component';

const routes: Routes = [{path:"dashboard",component:DashboardComponent},
  {path:"category",component:AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }