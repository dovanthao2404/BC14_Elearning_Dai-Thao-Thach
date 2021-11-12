import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTemplateRoutingModule { }
