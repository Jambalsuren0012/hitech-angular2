import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books/search?q=${query}`);
  }
}
