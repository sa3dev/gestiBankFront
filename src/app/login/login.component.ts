import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../service/conseiller.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
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
  private test: string[];

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

        // console.log(this.typeUtilisateur.split(';' , ));
        if ( this.typeUtilisateur !== undefined) {
          this.test = this.typeUtilisateur.split(';');

        console.log('type = ' + this.test[0]);
        console.log('pseudo = ' + this.test[1]);

        // this.conseillerService.getClientByPseud(this.test[1]).subscribe()

        if (this.test[0] === 'Administrateur' ) {
            this.router.navigate(['admin']);
            this.test = [''];

        }else if ( this.test[0] === 'Conseiller') {
          this.router.navigate(['conseiller/', this.test[1] ]);
          this.test = [''];
        }else if (this.test[0] === 'Client') {
          this.router.navigate(['client/', this.test[1]]);
          this.test = [''];
        }
    }

  }

}
