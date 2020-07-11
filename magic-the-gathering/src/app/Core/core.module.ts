//https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Constants } from '../Config/constants';
import { ApiHttpService } from './services/api-http.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Constants,
    ApiHttpService,
  ],
})
export class CoreModule { }
