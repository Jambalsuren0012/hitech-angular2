import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  menulist(lang: any = 'mn'): Observable<any> {
    return this.http.get(`${environment.apiUrl}/gallery`);
  }
}
