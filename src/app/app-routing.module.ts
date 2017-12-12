import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ClientComponent } from './client/client.component';


// test
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'connexion' , component: LoginComponent },
  { path: 'admin' , component: AdminPageComponent },
  { path: 'conseiller' , component: ConseillerComponent },
  { path: 'client' , component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }