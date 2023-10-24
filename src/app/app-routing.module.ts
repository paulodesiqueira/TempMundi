import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheaterHomeComponent } from './modules/wheater/page/wheater-home/wheater-home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'weather',
    pathMatch:'full',
  },

  {
    path: 'weather',
    component: WheaterHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
