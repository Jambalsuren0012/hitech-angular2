import { Injectable } from '@angular/core'
import { environment } from '../environments/environment.development'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) {}

  menulist(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    return this.http.get(this.apiUrl + 'menu', httpOptions)
  }
}
