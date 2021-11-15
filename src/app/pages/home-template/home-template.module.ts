import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarHomeComponent } from './_components/navbar-home/navbar-home.component';
import { FooterHomeComponent } from './_components/footer-home/footer-home.component';
import { OurNewslettersComponent } from './_components/our-newsletters/our-newsletters.component';
import { MaterialModule } from 'src/app/_core/shared/material/material.module';
import { CardCourseComponent } from './_components/card-course/card-course.component';



@NgModule({
  declarations: [
    HomeTemplateComponent,
    NavbarHomeComponent,
    FooterHomeComponent,
    OurNewslettersComponent,
    CardCourseComponent,
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule,
    MaterialModule,
  ]
})
export class HomeTemplateModule { }
