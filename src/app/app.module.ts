import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { AddlineComponent } from './component/addline/addline.component';
import { AddbusComponent } from './component/addbus/addbus.component';
import { AddstopComponent } from './component/addstop/addstop.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {FormsModule} from '@angular/forms';
import { UserService } from './services/service.user';
import {AdminService} from './services/service.admin'
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';


const AppRoutes: Routes = [
  { path: 'addbus', component: AddbusComponent},
  { path: 'addline', component: AddlineComponent},
  { path: 'addstop', component: AddstopComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddlineComponent,
    AddbusComponent,
    AddstopComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    //FlashMessagesModule,
    RouterModule.forRoot(AppRoutes),
    FlashMessagesModule.forRoot()

   
  ],
  providers: [UserService, AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
