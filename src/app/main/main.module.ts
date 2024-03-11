import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AppRoutes, routes } from '../app.routes';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports : [MainComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
