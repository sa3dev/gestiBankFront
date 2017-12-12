import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http';
//ajout ici de notre module admin dans l'app
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule  // et ici aussi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }