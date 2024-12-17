import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Fetch news list from the API
  newslist(): Observable<any> {
    return this.http.get(this.apiUrl + 'news');
  }

  // Fetch news details by ID (unchanged)
  getNewsDetails(id: string) {
    const payload = { lang: 'mn' };
    return this.http.post<any>(`${environment.apiUrl}/content`, payload).pipe(
      map((response) => {
        // Filter the response to only include books
        return response.filter(
          (item: { type: string }) => item.type === 'news',
        );
      }),
    );
  }

  // Get all news: either fetch from local data or from API
  getAllNews(): Observable<any> {
    // If using local data:
    const payload = { lang: 'mn' };
    return this.http.post<any>(`${environment.apiUrl}/content`, payload).pipe(
      map((response) => {
        // Filter the response to only include books
        return response.filter(
          (item: { type: string }) => item.type === 'news',
        );
      }),
    );
  }
}
