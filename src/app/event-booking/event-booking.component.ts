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

  constructor(private eventBookingService:EventBookingService) {

    this.getPendingEvents();
  }

  ngOnInit(): void {
  }



  cancelEvent(id:any) {

  }

   getPendingEvents() {

    this.eventBookingService.getPendingOrder().subscribe(
      res=>{
        this.eventBookingList = res;
      }
    );

  }
}
