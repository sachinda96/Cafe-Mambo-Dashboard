import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(BASE_URL + '/category/getall');
  }

  getAllCategories() {
    return this.http.get<Category[]>(
      BASE_URL + '/category/getAllCategories'
      //httpOptions
    );
  }
  getCategoryById(id: any) {
    return this.http.get<Category>(
      BASE_URL + '/category/getCategoryById/' + id
      // httpOptions
    );
  }
  addCategory(category: Category) {
    return this.http.post(
      BASE_URL + '/category',
      category
      //, httpOptions
    );
  }
  updateCategory(category: Category) {
    return this.http.post(
      BASE_URL + '/category/update',
      category
      //httpOptions
    );
  }
  deleteCategoryById(id: string) {
    return this.http.post(BASE_URL + '/category/removeCategory/' + id, {});
  }
}
