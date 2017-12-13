export class Conseiller {

  matricule: number;
  nom:  string;
  prenom: string;
  pseudo: string;
  motdepasse: string;
  email: string;
  adresse: string;
  codePostal: number;
  ville: string;
  telephone: number;
  dateNaissance: number;

  constructor(
      matricule: number,
      nom:  string,
      prenom: string,
      pseudo: string,
      motdepasse: string,
      email: string,
      adresse: string,
      codePostal: number,
      ville: string,
      telephone: number,
      dateNaissance: number
    ) {
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.motdepasse = motdepasse;
    this.email = email;
    this.adresse = adresse;
    this.codePostal = codePostal;
    this.ville = ville;
    this.telephone = telephone;
    this.dateNaissance = dateNaissance;
  }

}