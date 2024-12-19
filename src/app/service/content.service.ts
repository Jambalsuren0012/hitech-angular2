import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getAllContent(lang = 'mn'): Observable<any> {
    // You can pass any data if needed in the request body
    const payload = { lang: lang }; // Modify this if you need to send any specific data

    return this.http.post(`${environment.apiUrl}/content`, payload);
    // If there's no data to send, you can pass an empty object or other data.
  }
}
