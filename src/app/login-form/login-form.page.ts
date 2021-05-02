import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUtilityService } from './../services/login-utility/login-utility.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {
  newForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private logU: LoginUtilityService, private route: Router) {
    this.newForm = this.logU.loginForm;
    // this.formBuilder.group({

    //   email: new FormControl( '', [Validators.required,
    //   Validators.email]),

    //   password: new FormControl('',[ Validators.required,
    //   Validators.minLength(6),
    //   Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
    //   ])

    // });

  }
  logForm(){
    console.log(this.newForm.value);
    this.toHome();

  }
  ngOnInit() {
  }
  get email() { return this.newForm.get('email');}
  get password() { return this.newForm.get('password');}
  get name(){ return this.newForm.get('name');}
  get description(){ return this.newForm.get('description');}

  toHome(){
    this.route.navigate(['./home']);
  }
  ionViewWillUnload(){

  }

}
