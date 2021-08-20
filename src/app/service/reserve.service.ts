import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventBooking, EventBookingUser } from '../model/reservation';
import { BASE_URL } from 'src/environments/environment';
import { Package } from '../model/packages';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ReserveService {
  constructor(private http: HttpClient) {}

  /*for event  reservation  // event booking*/

  getAllReservations() {
    return this.http.get<EventBooking[]>(BASE_URL + '/eventbooking/getAll');
  }

  getReservationById(id: string) {
    return this.http.get(BASE_URL + '/eventbooking/get/' + id, httpOptions);
  }

  getAllReservationsByUser(id: string | null) {
    return this.http.get<Array<EventBooking>>(
      BASE_URL + '/eventbooking/user/getAll/' + id,
      httpOptions
    );
  }
  getAllReservationsByDate() {}
  getAllReservationsByMonth() {}
  getAllReservationsByYear() {}
  addReservation(reserve: EventBooking): Observable<any> {
    return this.http.post(
      BASE_URL + '/eventbooking/save',
      reserve,
      httpOptions
    );
  }

  addReservationUser(reserve: EventBookingUser): Observable<any> {
    return this.http.post(
      BASE_URL + '/eventbooking/user/save',
      reserve,
      httpOptions
    );
  }

  updateReservation(reserve: EventBooking) {
    return this.http.post(
      BASE_URL + '/eventbooking/update',
      reserve,
      httpOptions
    );
  }
  deleteReservation(id: string) {
    return this.http.get(BASE_URL + '/eventbooking/remove/' + id, httpOptions);
  }

  getFreeDates() {
    return this.http.get<{ availableDates: string[] }>(
      BASE_URL + '/events/reservation/dates/available'
    );
  }

  /*  for other users */
}
