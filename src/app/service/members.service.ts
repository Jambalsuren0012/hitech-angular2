import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllMembers(lang: any = 'mn'): Observable<any> {
    return this.http.get(`${environment.apiUrl}/members`);
  }
  getMemberById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/members/${id}`);
  }
}
