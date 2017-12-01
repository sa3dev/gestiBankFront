import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//apres avoir creer les sous-composant on les importes dans notre 
//modules de "base" du composant principale
import { ConseillerListComponent } from './conseiller-list/conseiller-list.component';
import { ConseillerDetailComponent } from './conseiller-detail/conseiller-detail.component'; 


// on declare les routes et le composant qui va correspondre
const routes: Routes = [  
	{ path: 'conseillers' , component: ConseillerListComponent },
	{ path: 'conseillers/create' , component: ConseillerDetailComponent },//ici on prendra detail car cest dans les details dun conseiller quon pourra le suprimmer 
	{ path: 'conseillers/edit/:mle' , component: ConseillerDetailComponent } // pareil pour edit/:mle
 ]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }