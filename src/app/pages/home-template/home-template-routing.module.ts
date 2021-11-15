import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template.component';

const routes: Routes = [
  {
    path: "",
    component: HomeTemplateComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "register",
        loadChildren: () => import("./register/register.module").then(m => m.RegisterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTemplateRoutingModule { }
