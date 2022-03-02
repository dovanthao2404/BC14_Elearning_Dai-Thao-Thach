import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './shortcut.pipe';
import { FormatDatePipe } from './format-date.pipe';



@NgModule({
  declarations: [
    ShortcutPipe,
    FormatDatePipe,
  ],
  imports: [
    CommonModule
  ], exports: [
    ShortcutPipe, FormatDatePipe
  ]
})
export class PipeModule { }
