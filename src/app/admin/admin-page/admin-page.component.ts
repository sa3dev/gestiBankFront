import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { ConseillerService } from '../../service/conseiller.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers: [ConseillerService]
})
export class AdminPageComponent implements OnInit {
  private sub: any;
  private pseudo: any;

  constructor( private route: ActivatedRoute,
        private router: Router,
        private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => { this.sub = params['pseudo']; }
      )
      // console.log(this.sub );
  }
}
