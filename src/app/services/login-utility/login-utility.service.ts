import { Injectable } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface Credentials{
  name: string;
  password: string;
  email: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginUtilityService {
  loginForm: FormGroup;
  cr: Credentials;

  constructor(private fb: FormBuilder) {
    console.log('Creating service');
    this.loginForm = this.fb.group({
        name: new FormControl('', [Validators.required]),

        email: new FormControl('', [Validators.required,
          Validators.email]),

        password: new FormControl('',[ Validators.required,
        Validators.minLength(6),
        // password requires a number a lowercase letter a uppercase and a special character 8 char minimum || regex ||
        Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
        ]),

        description: new FormControl('', Validators.maxLength(150))
    });
   }

   get name(){ return this.loginForm.get('name'); }
   get email(){ return this.loginForm.get('email');}
   get password(){ return this.loginForm.get('password');}
   get description(){ return this.loginForm.get('description');}
   get data(){ return this.loginForm.value;}
   async destroy(){
     this.onDestroy();
     await this.loginForm.reset();
   }
   onDestroy(){
    console.log('Destroying service');
   }
}
