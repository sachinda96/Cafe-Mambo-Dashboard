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
  isLoading: boolean = false;
  value: any = "";
  tempPackageList:Array<Package> = new Array<Package>();

  constructor(private packageService:PackageService) { }

  ngOnInit(): void {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    this.getAllPackages();
  }

  clearSelect() {
    this.id = "";
  }

  delete() {
    this.deletePackage(this.id);
  }

   getAllPackages() {
    this.isLoading = true;
    this.packageList = new Array<Package>();
    this.packageService.getAll().subscribe(
      res=>{
        this.isLoading = false;
        this.packageList = res;
        this.tempPackageList =res;
      },error => {
        this.isLoading = false;
      }
    );

  }

  deletePackage(id: string) {
    this.modelSuccess =  document.getElementById("modelSuccess") as HTMLElement;
    this.modelError =  document.getElementById("dangerModel") as HTMLElement;
    this.modelValidate =  document.getElementById("validateModel") as HTMLElement;
    if(this.id == ""){
      this.id = id;
      this.modelValidate.click();
    }else {
      this.isLoading = true;
      this.packageService.remove(id).subscribe(
        res=>{
          this.isLoading = false;
          this.id = "";
          this.message = "Successfully Deleted";
          this.modelSuccess.click();
          this.getAllPackages();
        },error => {
          this.id = "";
          this.isLoading = false;
          this.failedMessage = "Failed to delete"
          this.modelError.click();
        }
      )
    }
  }

  search() {
      if(this.value == ""){
        this.getAllPackages();
      }else {
        this.tempPackageList = this.packageList.filter(pac => pac.name.includes(this.value));
      }
  }
}
