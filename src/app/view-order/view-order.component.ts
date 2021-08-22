import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {OrderService} from "../service/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "../model/order";
import {$0} from "@angular/compiler/src/chars";



@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  order:Order = new Order();
  isPass: boolean = false;
  modalEl = null;
  @ViewChild('myModal') myModal: any;
  modelSuccess: any;
  modelError: any;
  close: any;
  message:any;


  constructor(private orderService:OrderService,private routerActive: ActivatedRoute,private route:Router) {


  }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;

    this.routerActive.params.subscribe((params) => {
      if (params.id != null || params.id != undefined) {
        this.getOrder(params.id);
      }
    });


  }

  getOrder(id:string){
    this.orderService.getOrder(id).subscribe(
      res=>{

        this.order =res;
      },error => {
        error.error();
      }
    );
  }

  dispatchOrder() {

    this.orderService.dispatchOrder(this.order.id).subscribe(
      res=>{
        this.message = "Order Dispatch Success";
        this.modelSuccess.click();
        //this.close.click();
      },error => {
        console.log(error)
        this.modelError.click();
      }
    );
   }

  cancelOrder() {

    this.orderService.cancelOrder(this.order.id).subscribe(
      res=>{
        this.message = "Order Canceled"
        this.modelSuccess.click();
      },error => {
        this.modelError.click();
      }
    );
   }

  routeBack() {
    console.log("work")
    this.route.navigate(['nav/onlineorder'])
  }


}
