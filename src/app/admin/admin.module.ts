import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ConseillerListComponent } from './conseiller-list/conseiller-list.component';
import { ConseillerDetailComponent } from './conseiller-detail/conseiller-detail.component';
//import des module pour formulaire
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,	//declaration des modules
    ReactiveFormsModule
  ],
  declarations: [ConseillerListComponent, ConseillerDetailComponent]
})
export class AdminModule { }
