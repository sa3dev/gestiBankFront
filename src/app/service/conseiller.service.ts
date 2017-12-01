import { Injectable } from '@angular/core'; //nous permet d'injecter notre service a dautre composant
import { Conseiller } from "../modele/conseiller"; // modele conseiller ici pour avoir les attribut
import { Http, Response } from "@angular/http";	  // http servira a travailler avec les verbes gert post etc..et a a voir une reponse ou pas 
import 'rxjs/add/operator/map';     //map va servir a mettre en lien les données
import 'rxjs/add/operator/catch';	//catch servira a attraper une erreur si il ya .
import { Observable } from "rxjs/Observable";	// observable est lobjet qui servira a utliser rxjs 'en gros'. 


@Injectable() 
export class ConseillerService {
	private apiUrl = 'http://localhost:8080/SpringAngularStartProject/conseillers/';
	private apiUrl2 = 'http://localhost:8080/SpringAngularStartProject/conseiller/';

	constructor(private http: Http) { }//a chaque apelle on lance un http process

	// On mettra dans se service toutes les methode qu'on aura besoin pour les conseillers//
	
	findAllConseiller(): Observable<Conseiller[]> {
	    return this.http.get(this.apiUrl)
	      .map((res:Response) => res.json())
	      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	saveConseiller(conseiller: Conseiller): Observable<Conseiller>{
		return this.http.post(this.apiUrl2 , conseiller)
					.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	findConseillerByMle( mle: number ): Observable<Conseiller>{
		return this.http.get(this.apiUrl + mle )
					.map((res:Response) => res.json())
	      			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	updateConseiller(conseiller: Conseiller): Observable<Conseiller>{
		return this.http.put(this.apiUrl2 + conseiller.matricule, conseiller )
				.map((res:Response) => res.json())
		      	.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

 	deleteConseillerByMle(mle: number) : Observable<boolean>{
  		return this.http.delete(this.apiUrl2 + mle)
		      .map((res:Response) => res.json())
		      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


}