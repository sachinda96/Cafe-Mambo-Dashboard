import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAIN} from "./order.service";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Array<Category>>{
    return this.http.get<Array<Category>>(MAIN+"/category/getall");
  }

  save(category:Category){
    return this.http.post(MAIN+"/category",category);
  }

  update(category:Category){
    return this.http.post(MAIN+"/category/update",category);
  }

  delete(id:string){
    return this.http.get(MAIN+"/category/remove/"+id);
  }
}
