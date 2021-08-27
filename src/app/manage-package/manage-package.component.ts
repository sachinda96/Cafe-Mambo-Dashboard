import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../service/category.service";
import {Category} from "../model/category";
import {OrderService} from "../service/order.service";
import {ItemService} from "../service/item.service";
import {Item} from "../model/item";
import {Package} from "../model/package";
import {PackageService} from "../service/package.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manage-package',
  templateUrl: './manage-package.component.html',
  styleUrls: ['./manage-package.component.css']
})
export class ManagePackageComponent implements OnInit {

  type: any = "Save";
  categoryList:Array<Category> =new Array<Category>();
  itemList:Array<Item> = new Array<Item>();
  categoryId:string = "";
  itemIdList:Array<String> =  new Array();
  file: any;
  package:Package = new Package();
  failedMessage: any;
  message: any;
  modelSuccess: any;
  modelError: any;
  nameInvalid: boolean =false;
  priceInvalid: boolean = false;
  isLoading: boolean =false;

  constructor(private categoryService: CategoryService,private itemService:ItemService,private packageService:PackageService,private routerActive: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.routerActive.params.subscribe((params) => {
      if (params.id != null || params.id != undefined) {
        this.type = "Update"
        this.getPackage(params.id);
      }
    });

    this.getAllCategory();
  }

  save() {

    this.nameInvalid = false;
    this.priceInvalid = false;

    if(this.package.name == ""){
      this.nameInvalid = true;
    }else if(this.package.price == ""){
      this.priceInvalid = true;
    }else if(this.itemIdList.length == 0) {
      this.failedMessage = "Items can not empty";
      this.modelError.click();
    }else {
      this.isLoading =true;
      this.package.itemIdList = this.itemIdList;
      let formData:FormData = new FormData();
      formData.append('file', this.file);
      formData.append('data',JSON.stringify(this.package));

      if(this.type == "Update"){
        this.packageService.update(formData).subscribe(
          res=>{
            this.isLoading =false;
            this.message = "Package Updating successfully";
            this.modelSuccess.click();
          },error => {
            this.isLoading =false;
            this.failedMessage = "Package updating failed";
            this.modelError.click();
          }
        );
      }else {
        this.packageService.save(formData).subscribe(
          res=>{
            this.isLoading =false;
            this.message = "Package Saving successfully";
            this.modelSuccess.click();
          },error => {
            this.isLoading =false;
            this.failedMessage = "Package Saving failed";
            this.modelError.click();
          }
        );
      }

    }



  }

  fileChange(event:any) {
    let fileList: FileList = event.target.files;
    this.file = fileList[0];
  }

  setCategory(event: any) {
    this.categoryId = event.target.value;
    this.getAllItemByCategory(this.categoryId);
  }

   getAllCategory() {

    this.categoryList = new Array();
    this.categoryService.getAll().subscribe(
          res=>{
            this.categoryList = res;
          }
      );
  }

  getAllItemByCategory(categoryId: string) {
      this.itemList = new Array<Item>();
      this.itemService.getAllItemByCategory(categoryId).subscribe(
        res=>{
          this.itemList = res;
          this.itemList.forEach(e =>{
            this.itemIdList.forEach(id =>{
              if(e.id == id){
                e.select =true;
              }
            })
          })
        }
      );
  }

  setItem(id:string) {

    let isAvailable = false;

    this.itemIdList.forEach(e=>{
      if(e == id){
        isAvailable = true;
      }
    })

    if(isAvailable){
      this.itemIdList.splice(this.itemIdList.indexOf(id),1);
    }else{
      this.itemIdList.push(id);
    }

  }

  clear() {
    if(this.type == "Update") {
      this.route.navigate(["/nav/allpackage"])
    }
    this.ngOnInit();
    this.itemList = new Array();
    this.itemIdList = new Array();
    this.package = new Package();
  }

  getPackage(id: any) {
    this.isLoading =true;
    this.packageService.get(id).subscribe(
      res=>{
        this.isLoading =false;
        this.package = res;
        this.itemIdList = this.package.itemIdList;
      },error => {
        this.isLoading =false;
      }
    );

  }
}
