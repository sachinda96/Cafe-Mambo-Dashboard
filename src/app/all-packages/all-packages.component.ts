import { Component, OnInit } from '@angular/core';
import {Package} from "../model/package";
import {PackageService} from "../service/package.service";

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {
  failedMessage: any;
  message: any;
  packageList:Array<Package> = new Array<Package>();
  modelSuccess: any;
  modelError: any;
  modelValidate: any;
  id: any = "";

  constructor(private packageService:PackageService) { }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    this.getAllPackages();
  }

  clearSelect() {

  }

  delete() {
    this.deletePackage(this.id);
  }

   getAllPackages() {
    this.packageList = new Array<Package>();
    this.packageService.getAll().subscribe(
      res=>{
        this.packageList = res;
      }
    );

  }

  deletePackage(id: string) {
    if(this.id == ""){
      this.id = id;
      this.modelValidate.click();
    }else {
      this.packageService.remove(id).subscribe(
        res=>{
          this.id = "";
          this.message = "Successfully Deleted";
          this.modelSuccess.click();
          this.getAllPackages();
        },error => {
          this.failedMessage = "Failed to delete"
          this.modelError.click();
        }
      )
    }
  }
}
