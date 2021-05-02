import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `
<div class="bounds">
  <ng-container *ngFor="let item of amount" >
  <svg class="fill-stars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
    [style.fill]="fillColor" [style.stroke]="strokeColor" stroke-width="17" stroke-miterlimit="10" >
    <path class="st0" d="M104.55,28.66l20.26,44.73l46.75,6.86c4.04,0.59,5.7,5.52,2.85,8.44l-34.26,35.13l8.32,49.5
      c0.7,4.16-3.75,7.26-7.41,5.17L100,155l-41.06,23.5c-3.66,2.1-8.11-1.01-7.41-5.17l8.32-49.5L25.58,88.7
      c-2.85-2.92-1.19-7.84,2.85-8.44l46.75-6.86l20.26-44.73C97.22,24.75,102.78,24.75,104.55,28.66z"/>
    </svg>
  </ng-container>

   <ng-container *ngFor="let item of amount" >
    <svg class="fill-stars background-stars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
      style.fill="white" style.stroke='white' stroke-width="17" stroke-miterlimit="10" >
      <path class="st0" d="M104.55,28.66l20.26,44.73l46.75,6.86c4.04,0.59,5.7,5.52,2.85,8.44l-34.26,35.13l8.32,49.5
        c0.7,4.16-3.75,7.26-7.41,5.17L100,155l-41.06,23.5c-3.66,2.1-8.11-1.01-7.41-5.17l8.32-49.5L25.58,88.7
        c-2.85-2.92-1.19-7.84,2.85-8.44l46.75-6.86l20.26-44.73C97.22,24.75,102.78,24.75,104.55,28.66z"/>
      </svg>
    </ng-container>

    <div id="clipper" class='rectangle' ></div>
</div>



`,
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent {
  @Input() type: string;
  @Input() title: string;
  @Input() strokeColor: string;
  @Input() fillColor: string;
  amount = Array(5).fill(0).map((_, i) => i+1);
  // constructor() {

  //  }

  // ngOnInit() {}

}
