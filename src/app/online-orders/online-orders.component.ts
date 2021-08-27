import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order.service";
import {Order} from "../model/order";

@Component({
  selector: 'app-online-orders',
  templateUrl: './online-orders.component.html',
  styleUrls: ['./online-orders.component.css']
})
export class OnlineOrdersComponent implements OnInit {

  orderList:Array<Order> = new Array<Order>();
  message: any;
  failedMessage: any;
  isLoading: any= false;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getPendingOrders();
  }

  private getPendingOrders() {
    this.isLoading =true;
    this.orderService.getPendingOrders().subscribe(
      res=>{
        this.orderList =  res;
        this.isLoading =false;
      },error => {
        this.isLoading =false;
        error.error();
      }
    );
  }

  refresh(){
    this.getPendingOrders();
  }
}
