import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {SignupRequestPayload} from "./signup-request.payload";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupRequestPayload!: SignupRequestPayload;
  signupForm!: UntypedFormGroup ;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.signupRequestPayload = {
      username: 'string',
      email:'string',
      password: 'string'
    };
  }

  ngOnInit() {
    this.signupForm = new UntypedFormGroup({
      username: new UntypedFormControl(null),
      email: new UntypedFormControl(null),
      password: new UntypedFormControl(null)
    });
  }
  signup() {
    this.signupRequestPayload.username = this.signupForm.get('username')!.value;
    this.signupRequestPayload.email = this.signupForm.get('email')!.value;
    this.signupRequestPayload.password = this.signupForm.get('password')!.value;

    this.authService.signup(this.signupRequestPayload)
      .subscribe(() => {
        this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
      }, () => {
        this.toastr.error('Registration Failed! Please try again');
      });


  }

}
