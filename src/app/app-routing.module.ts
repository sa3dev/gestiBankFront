import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// test
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'connexion' , component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }