import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../service/conseiller.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConseillerService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

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

    this.conseillerService.connexion( a , b ).subscribe( );

    // on recupere les parametres de la reponse si elle est bonne
    // et on fait correspondre au routing ?
  }

}
