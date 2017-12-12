import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Conseiller } from '../../modele/conseiller'; // on importe notre modele conseiller
import { ConseillerService } from '../../service/conseiller.service';	// on importe notre service conseillerService
import { Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-conseiller-detail',
  templateUrl: './conseiller-detail.component.html',
  styleUrls: ['./conseiller-detail.component.css'],
  providers: [ ConseillerService ] 

})
export class ConseillerDetailComponent implements OnInit , OnDestroy{

	matricule: number;
	conseiller: Conseiller;
	conseillerForm: FormGroup;
	private sub : any;

  constructor( private route: ActivatedRoute, 
  			   private router : Router,
  			   private conseillerService: ConseillerService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(
  		params => { this.matricule = params['mle']; }  //attention ici on met un detecteur d'evenement pour trouver les id/mle ici on a mis mle pour correspondre avec le routage admin-routing
  		)


  	this.conseillerForm = new FormGroup({
  		matricule:  new FormControl('' , Validators.required ),
  		name : 		new FormControl('' , Validators.required ),
		firstname : new FormControl('' , Validators.required),
		pseudo : 	new FormControl('' , Validators.required),

		password :  new FormControl('' , Validators.required),
		email : 	new FormControl('' , [ 
						Validators.required ,
						Validators.pattern("[^ @]*@[^ @]*")
				]),
		address :	 new FormControl('' , Validators.required ),
		codePostal : new FormControl( '' , Validators.required),
		ville : 	 new FormControl( '' , Validators.required),
		telephone :  new FormControl( '' , Validators.required),
		dateNaissance : new FormControl( '' , Validators.required)
  	})

  	if (this.matricule) {
  		this.conseillerService.findConseillerByMle(this.matricule).subscribe(
	  			conseiller => {
	  				this.matricule = conseiller.matricule;
	  				this.conseillerForm.patchValue({
	  					matricule : conseiller.matricule,
	  					name :		conseiller.nom,
	  					firstname:  conseiller.prenom,
	  					pseudo :    conseiller.pseudo,

	  					address:    conseiller.adresse,
	  					password:   conseiller.motdepasse,
	  					email :		conseiller.email,

	  					telephone: conseiller.telephone,
	  					codePostal :conseiller.codePostal,
	  					ville :		conseiller.ville,
	  					dateNaissance :conseiller.dateNaissance 
	  				});
	  			},
	  			error => {
	  				console.log(error);
	  			}
  			)
  	}
  }

	ngOnDestroy(): void{
		this.sub.unsubscribe();
	}

	onSubmit(){
		  	if (this.conseillerForm.valid) { // editer un conseiller 

		  		if(this.matricule){
		  		let conseillers : Conseiller = new Conseiller(
				this.matricule,
				// this.conseillerForm.controls['matricule'].value,
				this.conseillerForm.controls['name'].value,
				this.conseillerForm.controls['firstname'].value,
				this.conseillerForm.controls['pseudo'].value,

				this.conseillerForm.controls['password'].value,
				this.conseillerForm.controls['address'].value,
				this.conseillerForm.controls['email'].value,

				this.conseillerForm.controls['codePostal'].value,
				this.conseillerForm.controls['ville'].value,
				this.conseillerForm.controls['telephone'].value,
				this.conseillerForm.controls['dateNaissance'].value);

				this.conseillerService.updateConseiller(conseillers).subscribe();

		  	}else{
		  		let conseillers : Conseiller = new Conseiller(
		  			this.conseillerForm.controls['matricule'].value,
		  			this.conseillerForm.controls['name'].value,
		  			this.conseillerForm.controls['firstname'].value,
		  			this.conseillerForm.controls['pseudo'].value,

		  			this.conseillerForm.controls['password'].value,
		  			this.conseillerForm.controls['address'].value,
		  			this.conseillerForm.controls['email'].value,

		  			this.conseillerForm.controls['codePostal'].value,
		  			this.conseillerForm.controls['ville'].value,
		  			this.conseillerForm.controls['telephone'].value,
		  			this.conseillerForm.controls['dateNaissance'].value);

		  			this.conseillerService.saveConseiller(conseillers).subscribe();
		  	}
		  }

		  	this.conseillerForm.reset();
		  	this.router.navigate(['/conseillers']);

	}

	redirectConseillerPage(){
		this.router.navigate(['/conseillers']);
	}

}
