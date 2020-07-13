import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetsComponent } from './sets/sets.component'


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
