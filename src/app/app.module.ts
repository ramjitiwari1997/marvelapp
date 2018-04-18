import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
     path:'home',component:HomeComponent,pathMatch:'full'
    },
    {
      path:'login',component:LoginComponent,pathMatch:'full'
    },
    {
      path:'welcome',component:WelcomeComponent,
    },
    {
      path:'details/:id',component:DetailsComponent,pathMatch:'full'
    },
    {
      path:'**',redirectTo:'welcome' ,pathMatch:'full'
    }

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
