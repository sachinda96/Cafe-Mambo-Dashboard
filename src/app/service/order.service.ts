import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Order, OrderDTO } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get<Array<OrderDTO>>(BASE_URL + '/order/getAllorders');
  }
  getAllOrdersByUser(userId: string | null) {
    return this.http.get<OrderDTO[]>(
      BASE_URL + '/order/getAllorders/' + userId
    );
  }
  getAllOrdersByDate(date: any) {
    return this.http.get<OrderDTO[]>(BASE_URL + '/order/getAllorders/' + date);
  }

  getOrderById(id: string) {
    return this.http.get<OrderDTO[]>(
      BASE_URL + '/order/getAllordersById/' + id
    );
  }
  addOrder(order: Order) {
    return this.http.post(BASE_URL + '/order', order);
  }
  updateOrder(order: Order) {
    return this.http.post(BASE_URL + '/order/cancel', order);
  }
}
