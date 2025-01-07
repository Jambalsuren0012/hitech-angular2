import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoordinatesService {
  constructor(private http: HttpClient) {}

  coordinatlist(lang = 'mn'): Observable<any> {
    const payload = { lang: lang }; // Modify this if you need to send any specific data

    return this.http.post(`${environment.apiUrl}/coordinates`, payload);
  }
}
