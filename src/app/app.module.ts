import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http';
// ajout ici de notre module admin dans l'app
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ClientComponent } from './client/client.component';
import { ConseillerComponent } from './conseiller/conseiller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    ClientComponent,
    ConseillerComponent
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