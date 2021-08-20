import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ITEMS_PER_PAGE_COUNT } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Item } from '../model/item';
import { delay } from 'rxjs/operators';

const size = ITEMS_PER_PAGE_COUNT;
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemCategorySelected = '';
  constructor(private http: HttpClient, private authService: AuthService) {}

  countByCategory(categoryId: string): Observable<any> {
    return this.http.get(BASE_URL + '/item/itemCountByCategory/' + categoryId);
  }

  getAllByPageIndexAndSize(
    index: number,
    size: number,
    categoryId: string
  ): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(
      BASE_URL +
        '/item/getAllItemsByIndexAndCategory/' +
        index +
        '/' +
        size +
        '/' +
        categoryId
    );
  }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(BASE_URL + '/item/getItem/' + id);
  }

  setItemCategorySelected(categoryid: string): void {
    this.itemCategorySelected = categoryid;
  }
  getAllItems() {
    return this.http.get<Item[]>(BASE_URL + '/item/getAll');
  }

  getAllItemsByCategory(categoryId: string) {
    return this.http.get<Item[]>(
      BASE_URL + '/item/getAllItemByCategory/' + categoryId
    );
    //return this.items;
  }

  getAllItemsByIndexAndCategory(index: number, categoryId: string | null) {
    return this.http
      .get<Item[]>(
        BASE_URL +
          '/item/getAllItemByIndexAndCategory/' +
          index +
          '/' +
          size +
          '/' +
          categoryId
      )
      .pipe(delay(1000));
  }

  getAllItemsByIndex(index: number) {
    return this.http.get<Item[]>(
      BASE_URL + '/item/getAllItemByIndex/' + index + '/' + size
    );
  }

  getItemById(id: string) {
    return this.http.get<Item>(BASE_URL + '/item/getItem/' + id);
  }

  addItem(values: any, item: Item) {
    return this.http.post(BASE_URL + '/item', item);
  }

  addImage(image: File) {
    return this.http.post('/item/', image);
  }

  updateItemById(image: any, item: Item) {
    return this.http.post(BASE_URL + '/item/update', {}, image);
  }

  updateImageById(image: any, id: string) {
    return this.http.put('/item/', image);
  }

  deleteItemById(id: string) {
    return this.http.post(BASE_URL + '/item/removeItem/' + id, {});
  }
}
