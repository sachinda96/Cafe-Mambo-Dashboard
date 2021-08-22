import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAIN} from "./order.service";
import {Observable} from "rxjs";
import {Package} from "../model/package";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }

  save(formData : FormData){
    return this.http.post(MAIN+"/package/save",formData);
  }

  update(formData : FormData){
    return this.http.post(MAIN+"/package/update",formData);
  }

  getAll():Observable<Array<Package>>{
    return this.http.get<Array<Package>>(MAIN+"/package");
  }

  get(id:string):Observable<Package>{
    return this.http.get<Package>(MAIN+"/package/"+id);
  }

  remove(id:string){
    return this.http.get(MAIN+"/package/remove/"+id);
  }
}
