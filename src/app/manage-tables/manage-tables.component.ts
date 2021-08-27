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
  isLoading: boolean = false;

  constructor(private shopOrderService:ShopOrderService) { }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.getAllShopTable();

  }

  generateTable() {
      this.isGenerateQr = true;
    this.data = this.tempData+this.shopTable.tableNumber;
  }

  save() {

    let list = this.tableList.filter(e => e.tableNumber == this.shopTable.tableNumber);

    if(list.length> 0){
      this.failedMessage = "This table number already added";
      this.modelError.click();
    }else {
      this.isLoading =true;
      this.shopOrderService.addShopTables(this.shopTable).subscribe(
        res => {
          this.isLoading =false;
          this.message = "Table Details Added";
          this.modelSuccess.click();
        }, error => {
          this.isLoading =false;
          this.failedMessage = "Failed to add Table"
          this.modelError.click();
        }
      )
    }
  }

  addNew() {

  }

  setNumber(event: any) {
    this.isGenerateQr = true;
    this.data = this.tempData+event.target.value;
  }

  isAddNew() {
      this.isAdd = true;
      this.isGenerateQr = false;

  }

  cancel() {
    this.isAdd = false;
    this.isGenerateQr = false;
    this.data = "";
  }

   getAllShopTable() {
    this.isGenerateQr = true;
    this.tableList = new Array<ShopTable>();
    this.shopOrderService.getAllShopTable().subscribe(
      res=>{
        this.isGenerateQr = false;
        this.tableList = res;
        if(this.tableList.length > 0){
          this.tableList =  this.tableList.sort((a, b) => a.tableNumber < b.tableNumber ? -1 : a.tableNumber > b.tableNumber ? 1 : 0)

        }
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
