import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  menulist(lang: any = 'mn'): Observable<any> {
    return this.http.get(`${this.apiUrl}/menu/${lang}`);
  }
}
