import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DirectivesModule } from 'src/app/_core/shared/directives/directives.module';
import { PipeModule } from 'src/app/_core/shared/pipe/pipe.module';
import { ListCourseComponent } from './list-course/list-course.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListCourseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule,
    PipeModule
  ]
})
export class HomeModule { }
