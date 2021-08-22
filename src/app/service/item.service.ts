import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAIN} from "./order.service";
import {Observable} from "rxjs";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  save(data:FormData){
    return this.http.post(MAIN+"/item/save",data);
  }

  update(data:FormData){
    return this.http.post(MAIN+"/item/update",data);
  }

  getAllItem():Observable<Array<Item>>{
    return this.http.get<Array<Item>>(MAIN+"/item/getAll");
  }

  getAllItemByCategory(id:string):Observable<Array<Item>>{
    return this.http.get<Array<Item>>(MAIN+"/item/getAllItemByCategory/"+id);
  }

  getItem(id:string):Observable<Item>{
    return this.http.get<Item>(MAIN+"/item/getItem/"+id);
  }

  removeItem(id:string){
    return this.http.get(MAIN+"/item/removeItem/"+id);
  }
}
