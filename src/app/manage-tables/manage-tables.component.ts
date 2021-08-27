import { Component, OnInit } from '@angular/core';
import {ShopTable} from "../model/shop-table";
import {ShopOrderService} from "../service/shop-order.service";

@Component({
  selector: 'app-manage-tables',
  templateUrl: './manage-tables.component.html',
  styleUrls: ['./manage-tables.component.css']
})
export class ManageTablesComponent implements OnInit {
  type: any = "Save";
  tempData:any = "http://localhost:4200/shoporder/";
  data:any ;
  tableList: Array<ShopTable> = new Array();
  isAdd: boolean = false;
  isGenerateQr: boolean = false;
  shopTable:ShopTable = new ShopTable();
  failedMessage: any;
  message: any;
  modelSuccess: any;
  modelError: any;

  constructor(private shopOrderService:ShopOrderService) { }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.getAllShopTable();

  }

  generateTable() {
      this.isGenerateQr = true;
  }

  save() {

    this.shopOrderService.addShopTables(this.shopTable).subscribe(
      res=>{
        this.message = "Table Details Added";
        this.modelSuccess.click();
      },error => {
        this.failedMessage = "Failed to add Table"
        this.modelError.click();
      }
    )

  }

  addNew() {

  }

  setNumber($event: Event) {
    this.isGenerateQr = true;
    this.data = this.tempData+this.shopTable.tableNumber;
  }

  isAddNew() {
    this.isAdd = true;
    this.isGenerateQr = false;
    this.data = this.tempData+this.shopTable.tableNumber;
  }

  cancel() {
    this.isAdd = false;
    this.isGenerateQr = false;
    this.data = "";
  }

   getAllShopTable() {

    this.tableList = new Array<ShopTable>();
    this.shopOrderService.getAllShopTable().subscribe(
      res=>{
        this.tableList = res;
      }
    );

  }

  clear() {
    this.isAdd =false;
    this.getAllShopTable();
    this.isGenerateQr =false;
    this.data = "";
  }
}
