import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../service/conseiller.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConseillerService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private  typeUtilisateur: string;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      pseudo:  new FormControl('' , Validators.required ),
      password: new FormControl('' , Validators.required )
    })
  }

  loginTest() {
    const a = this.loginForm.controls['pseudo'].value;
    const b = this.loginForm.controls['password'].value ;

    this.conseillerService.connexion( a , b ).subscribe(
      result => { this.typeUtilisateur = result},
      error => { console.log(error);  });

      if ( this.typeUtilisateur === 'Administrateur' ) {
          this.router.navigate(['admin']);
      }else if ( this.typeUtilisateur === 'Conseiller') {
        this.router.navigate(['conseiller']);
      }else if (this.typeUtilisateur === 'Client') {
        this.router.navigate(['client']);
      }
  }

}
