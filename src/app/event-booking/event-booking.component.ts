import { Component, OnInit } from '@angular/core';
import {EventBookingService} from "../service/event-booking.service";
import {EventBooking} from "../model/event-booking";

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

  eventBookingList: Array<EventBooking> = new Array<EventBooking>();
  id:string = "";
  failedMessage: any;
  message: any;

  modelSuccess: any;
  modelError: any;
  modelValidate: any;

  constructor(private eventBookingService:EventBookingService) {

    this.getPendingEvents();
  }

  ngOnInit(): void {
    this.modelSuccess = document.getElementById('modelSuccess') as HTMLElement;
    this.modelError = document.getElementById('dangerModel') as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
  }



  cancelEvent(id:any) {

  }

   getPendingEvents() {

    this.eventBookingList = new Array<EventBooking>();
    this.eventBookingService.getPendingOrder().subscribe(
      res=>{
        console.log(res);
        this.eventBookingList = res;
      }
    );

  }

  complete(id:string) {

    if(this.id = ""){
      this.id = id;
      this.modelValidate.click();
    }else {
      this.eventBookingService.complete(id).subscribe(
        res=>{
          this.message = 'Event Updated';
          this.modelSuccess.click();
        },error => {
          this.failedMessage = 'Event Update Failed';
          this.modelError.click();

        }
      );
    }


  }

  completeEvent() {

  }
}
