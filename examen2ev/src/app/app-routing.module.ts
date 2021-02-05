import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {EXButtonComponent} from './exbutton/exbutton.component';
import {EXSecondViewComponent} from './exsecond-view/exsecond-view.component';

const routes: Routes = [
  {path: 'Index', component: IndexComponent},
  {path: 'ExButton', component: EXButtonComponent},
  {path: 'ExSecondView', component: EXSecondViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
