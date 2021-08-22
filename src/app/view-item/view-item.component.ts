import { Component, OnInit } from '@angular/core';
import {Item} from "../model/item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  ItemList: Array<Item> = new Array<Item>();
  message: any;
  failedMessage: any;
  modelSuccess: any;
  modelError: any;
  modelValidate: any;
  id: any = "";

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    this.getAllItem();
  }

  getAllItem() {
    this.ItemList = new Array<Item>();
       this.itemService.getAllItem().subscribe(
         res=>{
           this.ItemList = res;
         }
       );
    }

  deleteItem(id:string) {

    if(this.id == ""){
      this.id = id;
      this.modelValidate.click();
    }else {
      this.itemService.removeItem(id).subscribe(
        res=>{
          this.id = "";
          this.message = "Successfully Deleted";
          this.modelSuccess.click();
          this.getAllItem();
        },error => {
          this.failedMessage = "Failed to delete"
          this.modelError.click();
        }
      )
    }
  }

  delete() {
    this.deleteItem(this.id);
  }

  clearSelet() {
    this.id = "";
  }
}
