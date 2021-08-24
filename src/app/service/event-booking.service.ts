import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventBooking} from "../model/event-booking";
import {MAIN} from "./order.service";

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

  constructor(private http:HttpClient) { }

  getPendingOrder():Observable<Array<EventBooking>>{
    return this.http.get<Array<EventBooking>>(MAIN+"/eventbooking/getAllPending")
  }

  complete(id:string){
    return this.http.get(MAIN+"/eventbooking/complete/"+id)
  }
}
