import { Delivery } from './delivery';
import { Payment } from './payment';

export class EventBookingUser {
  id: string | undefined;
  userId: string | null = '';
  contactNo: string = '';
  location: string = '';
  message: string = '';
  date: Date = new Date();
  packageId: string | undefined = '';

  constructor() {}
}

export class EventBooking {
  id: string | undefined;
  name: string = '';
  email: string = '';
  contactNo: string = '';
  location: string = '';
  message: string = '';
  date: Date = new Date();
  packageId: string | undefined = '';

  constructor() {}
}

/*
         http.get('https://www.ggogle.com ').subscribe((data)=>{
           items=data;
         }).error(err=>{
           console.log(err);
         })

*/
