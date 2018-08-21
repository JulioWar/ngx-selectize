import { NgModule } from '@angular/core';
import { NgxSelectizeComponent } from './ngx-selectize.component';
import { NgxSelectizeOptionDirective } from './subcomponents/ngx-selectize-option.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxSelectizeOptionDirective,
    NgxSelectizeComponent
  ],
  exports: [
    NgxSelectizeOptionDirective,
    NgxSelectizeComponent
  ]
})
export class NgxSelectizeModule { }
