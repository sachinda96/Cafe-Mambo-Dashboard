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
  isLoading: boolean = false;

  constructor(private shopOrderService:ShopOrderService) { }

  ngOnInit(): void {
    this.getAllShopOrderByUser();
  }

   getAllShopOrderByUser() {
    this.isLoading = true;
    this.id = sessionStorage.getItem('user');
    if(this.id != ""){
      this.shopOrderService.getAllOrdersUserRole(this.id).subscribe(res=>{
        if(res){
          this.shopOrderList = res;
          this.isLoading = false;
        }
      },error => {
        this.isLoading = false;
      });
    }

  }

  refresh() {
    this.getAllShopOrderByUser();
  }
}
