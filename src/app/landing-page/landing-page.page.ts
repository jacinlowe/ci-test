import { Component, NgModule, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})


export class LandingPagePage implements OnInit {
size: number;
myColor ='#00ff00';
fillColor = '#ffd102';
strokeColor = '#000000';

  constructor(private router: Router) {
    // console.log(this.size);
  }

  ngOnInit() {
  }

  setValue($event: Event): void {
    console.log(this.size);
   const size = document.body.style;
  //  size.setProperty('--newsize',`${this.size}%`);

  }

  toHome(){
    this.router.navigate(['./home']);
  }
  toLogin(){
    this.router.navigate(['./login-form']);
  }
}
