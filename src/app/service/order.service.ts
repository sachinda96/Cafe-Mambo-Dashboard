import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../model/order";

export const MAIN="https://8080-cs-848463771596-default.cs-asia-southeast1-ajrg.cloudshell.dev/"

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getPendingOrders():Observable<Array<Order>>{
    return this.http.get<Array<Order>>(MAIN+"/order");
  }

  getOrder(id:string):Observable<Order>{
    return this.http.get<Order>(MAIN+"/order/"+id);
  }

  dispatchOrder(id:string):Observable<Order>{
    return this.http.get<Order>(MAIN+"/order/dispatch/"+id);
  }

  cancelOrder(id:string):Observable<Order>{
    return this.http.get<Order>(MAIN+"/order/cancel/"+id);
  }

}
