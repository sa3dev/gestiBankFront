import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../../modele/conseiller'; // on importe notre modele conseiller
import { ConseillerService } from '../../service/conseiller.service';	// on importe notre service conseillerService
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseiller-list',
  templateUrl: './conseiller-list.component.html',
  styleUrls: ['./conseiller-list.component.css'],
  providers:[ConseillerService]  //sert a utiliser notre service dans ce composant
})
export class ConseillerListComponent implements OnInit {
	private conseillers: Conseiller[]; //servira a remplir les données trouvé (http)

	constructor(private conseillerService : ConseillerService , private router: Router) { }

	ngOnInit() { //quand le composant sera lancé on chargera tout les conseillers ici
		this.getAllConseillers();
	}

	getAllConseillers(){
		//j'utilise le findAll.. dans le conseillerService
		this.conseillerService.findAllConseiller().subscribe( // ajout de subscribe qui soulevera une erreur ou affectera tout les conseillers
			conseillers => { this.conseillers = conseillers } ,
			err => { console.log(err) ;
			}
		);
	}

	redirectNewConseillerPage(){
		this.router.navigate(['/conseillers/create']);
	}

	editConseillerPage(conseiller: Conseiller){
		if (conseiller) {
			this.router.navigate(['conseillers/edit',conseiller.matricule]);
		}
	}

	deleteConseiller(conseiller : Conseiller){
		if (conseiller) {
			this.conseillerService.deleteConseillerByMle(conseiller.matricule).subscribe(
					res=>{ 
					this.getAllConseillers();
					this.router.navigate(['/conseillers']);
					 }
				)
		}
	}

	
}
