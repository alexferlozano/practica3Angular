import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './animation/animation.component';
import { FormsComponent } from './forms/forms.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimationComponent,
    FormsComponent,
    ErrorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      {path:'home',component:HomeComponent,data: {animation: 'home'}},
      {path:'forms',component:FormsComponent,data: {animation: 'forms'}},
      {path:'animation',component:AnimationComponent,data: {animation: 'animation'}}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
