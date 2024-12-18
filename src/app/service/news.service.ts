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

 // Get all news: either fetch from local data or from API
 getAllNews(payload: any): Observable<any> {
  // If using local data:
  //   const payload = { lang: lang };
  return this.http.post<any>(`${environment.apiUrl}/content`, payload).pipe(
   map((response) => {
    // Filter the response to only include books
    return response.filter((item: { type: string }) => item.type === 'news');
   })
  );
 }
}
