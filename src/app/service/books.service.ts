import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  boookslist(): Observable<any> {
    return this.http.get(this.apiUrl + 'test');
  }

  bookscategorylist(id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.get(this.apiUrl + 'book/category/' + id, httpOptions);
  }
  getAllBooks(lang: any = 'mn'): Observable<any> {
    const payload = { lang: lang };
    return this.http.post<any>(`${environment.apiUrl}/content`, payload).pipe(
      map((response) => {
        // Filter the response to only include books
        return response.filter(
          (item: { type: string }) => item.type === 'book',
        );
      }),
    );
  }

  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books/search?q=${query}`);
  }
}
