import { Component, OnInit } from '@angular/core';
import {CustomerShopOrder} from "../model/customer-shop-order";
import {ShopOrderService} from "../service/shop-order.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-shop-order',
  templateUrl: './view-shop-order.component.html',
  styleUrls: ['./view-shop-order.component.css']
})
export class ViewShopOrderComponent implements OnInit {

  customerShopOrder:CustomerShopOrder = new CustomerShopOrder();
  message: any;
  failedMessage: any;
  modelSuccess: any;
  modelError: any;
  modelValidate: any;
  id : any = "";
  role: any;

  constructor(private shopOrderService:ShopOrderService, private routerActive: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    this.role = sessionStorage.getItem("role");
    this.routerActive.params.subscribe((params) => {
      if (params.id != null || params.id != undefined) {
        this.getShopOrder(params.id);
      }
    });
  }

  getShopOrder(id:any){
    this.shopOrderService.getShopOrder(id).subscribe(
      res=>{
        this.customerShopOrder = res;
      }
    );
  }

  complete() {

    if(this.id == ""){

      this.id =  this.customerShopOrder.id;
      this.modelValidate.click();
    }else{
        this.shopOrderService.updateLevel(this.id).subscribe(
          res=>{
            this.message = "Order Completed"
            this.modelSuccess.click();
          },error => {
            this.message = "Order Completing Failed"
            this.modelSuccess.click();
          }
        );
    }
  }

  CompleteOrder() {
    this.complete();
  }

  no() {
    this.id = "";
  }

  done() {
    this.route.navigate(['nav/shoporder'])
  }
}
