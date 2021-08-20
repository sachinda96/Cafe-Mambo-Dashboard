import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CLOUD_API_URL } from 'src/environments/environment';

export class ImageService {
  constructor(private http: HttpClient) {}

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);
    return this.http.post(CLOUD_API_URL + '/', formData);
  }
}
