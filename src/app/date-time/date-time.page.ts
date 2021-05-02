import { Component, OnInit } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { of } from 'rxjs';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
currentDate: Date;
monthArray: Array<string>;
dayArray: Array<any>;
timeArray=[];
yearMonth: Date;
day: string;
time: string;


  constructor() { }

  ngOnInit() {

    this.dateArray();
    this.dayList();
    this.timesList();

  }

  monthClick(monthyr){
    console.log('month Click:',monthyr);
    this.yearMonth = monthyr;
    this.dayList();
  }
  dayClick(day){
    console.log(day);
    this.day = day;
  }

  timeClick(time: number,morning: string){
    console.log(`${time.toString()} ${morning}`);
    this.time = `${time.toString()} ${morning}`;
  }


dateArray(){

  const date = new Date();
  const dateArray = [];
  const dayArray = [];
  const now = date.getMonth();


  for (let i = 0; i < 6; i++ ){
    const dateTime = new Date(date.setMonth(now + i));
    const dateFormat = dateTime
    .toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
    });
    dateArray.push({display: dateFormat, value: dateTime});
    // console.log(dateTime.getMonth(), dateTime.getFullYear(), this.days(dateTime.getMonth(), dateTime.getFullYear()));
  }
  this.monthArray = dateArray;

}


  dayList(){
    let  date = new Date();

    if (!this.yearMonth || this.yearMonth.getMonth() === date.getMonth() ){
      date = new Date();

  } else{

    date = new Date(this.yearMonth.getFullYear(), this.yearMonth.getMonth(), 1);
    console.log('day selector:',date);
  }
    const currentDay = date.getDate();
    const daysInMonth = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    // eslint-disable-next-line prefer-const
    let daysArray = [];
    const maxDays = 10;
    for (let i = 1; i < daysInMonth; i++){
      if (i >= currentDay) {
        // ADD any formatting here
        const dateItem = new Date(date.getFullYear(), date.getMonth(), i);

        daysArray.push({weekday:dateItem.toLocaleDateString('en-US',{weekday:'short',}),
                        day: dateItem.toLocaleDateString('en-US', {day:'numeric'})
                      });
      }
    }
    /// UN Comment this if you want to have a max days limiter
    // if (daysArray.length > maxDays) {

    //   daysArray = daysArray.slice(0, maxDays);
    // }
    // SET This to constructor variable
    this.dayArray = daysArray;

  }

  timesList(){
    for (let i=1; i<=12; i++){
      // SET This to Constructor Variable
      this.timeArray.push(i);
    }
    console.log(this.timeArray);
  }


}
