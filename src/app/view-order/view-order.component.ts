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
  validateMessage: any;
  modelValidate: any;
  isDispatched: Boolean = false;
  isCancel: Boolean = false;
  isLoading: boolean = false;


  constructor(private orderService:OrderService,private routerActive: ActivatedRoute,private route:Router) {


  }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    this.routerActive.params.subscribe((params) => {
      if (params.id != null || params.id != undefined) {
        this.getOrder(params.id);
      }
    });


  }

  getOrder(id:string){
    this.isLoading = true;
    this.orderService.getOrder(id).subscribe(
      res=>{
        this.isLoading = false;
        this.order =res;
      },error => {
        this.isLoading = false;
        error.error();
      }
    );
  }

  dispatchOrder() {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    if(this.isDispatched == false){
      this.isDispatched = true;
      this.validateMessage = "Are you sure want to dispatch this...";
      this.modelValidate.click();
    }else{
      this.isLoading = true;
      this.orderService.dispatchOrder(this.order.id).subscribe(
        res=>{
          this.isLoading = false;
          this.isDispatched = false;
          this.message = "Order Dispatch Success";
          this.modelSuccess.click();
          //this.close.click();
        },error => {
          this.isLoading = false;
          console.log(error)
          this.modelError.click();
        }
      );
    }


   }

  cancelOrder() {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    if(this.isCancel == false){
      this.isCancel = true;
      this.validateMessage = "Are you sure want to cancel this...";
      this.modelValidate.click();
    }else {
      this.isLoading = true;
      this.orderService.cancelOrder(this.order.id).subscribe(
        res => {
          this.isLoading = false;
          this.isCancel =false;
          this.message = "Order Canceled"
          this.modelSuccess.click();
        }, error => {
          this.isLoading = false;
          this.modelError.click();
        }
      );
    }
   }

  routeBack() {
    this.route.navigate(['nav/onlineorder'])
  }


  yes() {
    if(this.isDispatched){
      this.dispatchOrder();
    }else if(this.isCancel){
      this.cancelOrder();
    }
  }

  no() {
    this.isDispatched = false;
    this.isCancel = false;
  }
}
