import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../../modele/conseiller';
import { ConseillerService } from '../../service/conseiller.service';
import { Router } from '@angular/router';
import { Demande } from '../../modele/demande';


@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css'],
   providers: [ ConseillerService ] 
})
export class AffectationComponent implements OnInit {
	private conseillers: Conseiller[];
	private demands: Demande[];

	private conseillerSelected: Conseiller;
	private demandSelected: Demande;

  constructor(private conseillerService : ConseillerService , private router: Router) { }

  ngOnInit() {
  	this.getAllConseillers();
  	this.getAlldemands();
  }

  getAllConseillers(){
		this.conseillerService.findAllConseiller().subscribe( // ajout de subscribe qui soulevera une erreur ou affectera tout les conseillers
			conseillers => { this.conseillers = conseillers } ,
			err => { console.log(err) ;
			}
		);
	}

	getAlldemands(){
		this.conseillerService.getAlldemands().subscribe( // ajout de subscribe qui soulevera une erreur ou affectera tout les conseillers
			demandes => { this.demands = demandes } ,
			err => { console.log(err) ;
			}
		);
	}

	selectedConseiller(conseiller: Conseiller){
			if(conseiller){
				this.conseillerSelected = conseiller;
			}
	}

	selectedDemand(demand: Demande){
		if(demand){
			this.demandSelected = demand;
		}
	}

}
