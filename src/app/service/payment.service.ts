import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Payment } from '../model/payment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  getAllpayments() {
    return this.http.get<Payment[]>(BASE_URL + '/payment/getAll');
  }
  getAllPaymentsByUser(userId: string) {
    return this.http.get<Payment[]>(
      BASE_URL + '/payment/getAll/user/' + userId,
      httpOptions
    );
  }
  getAllPaymentsByDate(date: Date) {
    return this.http.get<Payment[]>(
      BASE_URL + '/payment/getAll/date/' + date.toDateString(),
      httpOptions
    );
  }
  getAllPaymentsByMonth(month: number) {
    return this.http.get<Payment[]>(
      BASE_URL + '/payment/getAll/month/' + month,
      httpOptions
    );
  }
  getPaymentById(id: string) {
    return this.http.get<Payment>(BASE_URL + '/payment/get/' + id, httpOptions);
  }
  addPayment(payment: Payment) {
    return this.http.post(BASE_URL + '/payment/save', payment, httpOptions);
  }
  updatePayment(payment: Payment) {
    return this.http.post(BASE_URL + '/payment/update', payment, httpOptions);
  }
  //deletePayment(){}
}
