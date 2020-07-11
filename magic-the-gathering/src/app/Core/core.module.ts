//https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Constants } from '../Config/constants'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Constants
  ],
})
export class CoreModule { }
