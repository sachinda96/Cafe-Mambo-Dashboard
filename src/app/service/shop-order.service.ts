import { Injectable } from '@angular/core';
import {ShopOrder} from "../model/shop-order";
import {HttpClient} from "@angular/common/http";
import {MAIN} from "./order.service";
import {Observable} from "rxjs";
import {CustomerShopOrder} from "../model/customer-shop-order";

@Injectable({
  providedIn: 'root'
})
export class ShopOrderService {

  constructor(private http:HttpClient) { }

  addShopTables(shopOrder:ShopOrder){
    return this.http.post(MAIN+"/shoporder/savetables",shopOrder);
  }

  getAllShopTable():Observable<Array<ShopOrder>>{
    return this.http.get<Array<ShopOrder>>(MAIN+"/shoporder/getAllTables");
  }

  getAllUserRole(id:string):Observable<Array<CustomerShopOrder>>{
    return this.http.get<Array<CustomerShopOrder>>(MAIN+"/shoporder/getAllUserRole/"+id)
  }

  getAllOrdersUserRole(id:string):Observable<Array<CustomerShopOrder>>{
    return this.http.get<Array<CustomerShopOrder>>(MAIN+"/shoporder/getAllUserRole/"+id);
  }

  getShopOrder(id:string):Observable<CustomerShopOrder>{
    return this.http.get<CustomerShopOrder>(MAIN+"/shoporder/getShopOrder/"+id);
  }

  updateLevel(id:string){
    return this.http.get(MAIN+"/shoporder/updateLevel/"+id);
  }
}
