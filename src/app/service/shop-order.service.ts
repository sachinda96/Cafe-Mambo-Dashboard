import { Injectable } from '@angular/core';
import {ShopOrder} from "../model/shop-order";
import {HttpClient} from "@angular/common/http";
import {MAIN} from "./order.service";
import {Observable} from "rxjs";

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
}
