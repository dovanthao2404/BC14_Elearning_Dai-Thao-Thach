import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { CourseManagementComponent } from './course-management.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CourseManagementComponent],
  imports: [CommonModule, CourseManagementRoutingModule, NgxPaginationModule],
})
export class CourseManagementModule {}
