import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerShopOrder} from "../model/customer-shop-order";
import {ShopOrderService} from "../service/shop-order.service";
import {identity} from "rxjs";

@Component({
  selector: 'app-shop-orders',
  templateUrl: './shop-orders.component.html',
  styleUrls: ['./shop-orders.component.css']
})
export class ShopOrdersComponent implements OnInit {

  shopOrderList: Array<CustomerShopOrder> = new Array<CustomerShopOrder >();
  message: any;
  failedMessage: any;
  id:any = "";

  constructor(private shopOrderService:ShopOrderService) { }

  ngOnInit(): void {
    this.getAllShopOrderByUser();
  }

   getAllShopOrderByUser() {
    this.id = sessionStorage.getItem('user');
    if(this.id != ""){
      this.shopOrderService.getAllOrdersUserRole(this.id).subscribe(res=>{
        if(res){
          console.log(res)
          this.shopOrderList = res;
        }
      });
    }

  }
}
