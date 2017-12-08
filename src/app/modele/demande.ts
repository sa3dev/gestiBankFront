export class Demande{
	numDemande: number;
      cp: object; 
      /*{
         "pseudo": string,
         "nom": string,
         "prenom": string,
         "email": string,
         "adresse": string,
         "codePostal": number,
         "ville": string,
         "telephone": number,
         "revenuMens": number,
         "dateNaissance": number,
         "piecesJutificatives": []
      };*/
      valide: boolean;
      conseiller: string;
      dateCreation: number;
      dateAffectation: number;

      constructor(
      		numDemande: number,
      		cp : object,
      		valide: boolean,
      		conseiller: string,
      		dateCreation: number,
      		dateAffectation: number ){

      	this.numDemande = numDemande;
      	this.cp = cp;
      	this.valide = valide;
      	this.conseiller = conseiller; 
      	this.dateCreation = dateCreation;
      	this.dateAffectation = dateAffectation;

      }
}