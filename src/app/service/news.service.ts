import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  newslist(): Observable<any> {
    return this.http.get(this.apiUrl + 'news');
  }
}
