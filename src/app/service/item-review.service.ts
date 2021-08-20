import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { ItemReview, ItemUserReview } from '../model/item-review';

@Injectable({
  providedIn: 'root',
})
export class ItemReviewService {
  constructor(private http: HttpClient) {}

  getAllReviewsByUser(userId: string) {
    return this.http.get<ItemUserReview[]>(BASE_URL + '/itemReview/' + userId);
  }
  getReviewById(id: string) {
    return this.http.get<ItemUserReview>(BASE_URL + '/itemReview/' + id);
  }
  addReview(review: any) {
    return this.http.post(BASE_URL + '/review', review);
  }
  deleteReview(id: string) {
    return this.http.post(BASE_URL + '/review', id);
  }
}
