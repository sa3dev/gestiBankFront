import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ClientComponent } from './client/client.component';
import { ConseillerListComponent } from './admin/conseiller-list/conseiller-list.component';

// test
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'connexion' , component: LoginComponent },
  // AdminPageComponent
  { path: 'conseiller/:pseudo' , component: ConseillerComponent },
  { path: 'client/:mle' , component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }