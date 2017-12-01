import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../modele/User";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})

export class UserDetailComponent implements OnInit, OnDestroy {

  id: number;
  user: User;

  userForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])
    });

     if (this.id) { //edit form
      this.userService.findById(this.id).subscribe(
        user => {
            this.id = user.id;
            this.userForm.patchValue({
            username: user.username,
            address: user.address,
            email: user.email,
          });
         },error => {
          console.log(error);
         }
      );
 
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.userForm.valid) {

      if (this.id) {
        let user: User = new User(this.id,
          this.userForm.controls['username'].value,
          this.userForm.controls['address'].value,
          this.userForm.controls['email'].value);
        this.userService.updateUser(user).subscribe();
      } else {
        let user: User = new User(null,
          this.userForm.controls['username'].value,
          this.userForm.controls['address'].value,
          this.userForm.controls['email'].value);
        this.userService.saveUser(user).subscribe();
 
      }

     }
      this.userForm.reset();
      this.router.navigate(['/user']);
  }

  redirectUserPage() {
    this.router.navigate(['/user']);

  }
}