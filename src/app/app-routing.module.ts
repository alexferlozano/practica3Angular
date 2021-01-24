import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { ErrorComponent } from './error/error.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'forms',component:FormsComponent},
  {path:'animation',component:AnimationComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
