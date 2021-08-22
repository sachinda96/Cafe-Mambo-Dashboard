import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../service/category.service";
import {Category} from "../model/category";
import {Item} from "../model/item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {

  categoryList:Array<Category> = new Array<Category>();
  item:Item = new Item();
  file:any;
  message: any;
  failedMessage: any;
  modelSuccess: any;
  modelError: any;
  type: any = "Save";
  imageModel: any;

  constructor(private categoryService:CategoryService,private itemService:ItemService,private routerActive: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe((params) => {
      if (params.id != null || params.id != undefined) {
        this.type = "Update"
        this.getItem(params.id);
      }
    });
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.imageModel =  document.getElementById("imageModel") as HTMLElement;
    this.getAllCategory()
  }

   getAllCategory() {
    this.categoryList = new Array<Category>();
    this.categoryService.getAll().subscribe(
      res=>{
        this.categoryList = res;
      }
    );
  }

  setCategory(event : any) {
    this.item.categoryId = event.target.value;
  }

  fileChange(event : any) {
    let fileList: FileList = event.target.files;
    this.file = fileList[0];
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.item.imagePath = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);

  }

  save() {
    let formData:FormData = new FormData();
    formData.append('file', this.file);
    formData.append('data',JSON.stringify(this.item));

    if(this.item.categoryId == ""){
      this.failedMessage = "Select Correct Category"
      this.modelError.click();
    }else {

      if(this.type == "Update"){
        this.itemService.update(formData).subscribe(
          res=>{
            this.message = "Item Updated";
            this.modelSuccess.click();
          },error => {
            this.failedMessage = "Failed to update"
            this.modelError.click();
          }
        );
      }else{
        this.itemService.save(formData).subscribe(
          res=>{
            this.message = "Item Added Success";
            this.modelSuccess.click();
          },error => {
            this.failedMessage = "Failed to save"
            this.modelError.click();
          }
        );
      }

    }
  }

  clear() {
    if(this.type == "Update"){
      this.route.navigate(["/nav/allitems"])
    }else {
      this.item = new Item();
      this.getAllCategory();
    }

  }

  getItem(id: any) {
    this.itemService.getItem(id).subscribe(
      res=>{
        this.item = res;
      }
    );
  }

  viewImage() {
    this.imageModel.click();
  }
}
