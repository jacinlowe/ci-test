import { Component, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { LoginUtilityService } from './../services/login-utility/login-utility.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loginData: LoginUtilityService, private router: Router) {

  }

  get data(): string { return this.loginData.data;}

  async toLogin(){
    console.log(this.data);
    console.log('about to clear');

    await this.loginData.destroy();
    this.router.navigate(['./landing-page']);
    console.log('after clear ');
    console.log(this.data);
  }

}


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args?: string[]): any {
    const keys = [];

        // eslint-disable-next-line guard-for-in
        for (const key in value) {
          keys.push({key, value: value[key]});
        }
    return keys;
  }
}
