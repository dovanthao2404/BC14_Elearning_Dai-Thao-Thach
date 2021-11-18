import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryCourseRoutingModule } from './category-course-routing.module';
import { CategoryCourseComponent } from './category-course.component';


@NgModule({
  declarations: [
    CategoryCourseComponent
  ],
  imports: [
    CommonModule,
    CategoryCourseRoutingModule
  ]
})
export class CategoryCourseModule { }
