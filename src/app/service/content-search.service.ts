import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentSearchService {
  constructor(private http: HttpClient) {}

  getAllContentSearch(lang = 'mn', title = ''): Observable<any> {
    const payload = { lang, title }; // Include title in the payload
    return this.http.post(`${environment.apiUrl}content/search`, payload).pipe(
      catchError((error) => {
        console.error('Error fetching content:', error);
        // Optionally, return a fallback value if the API fails
        return of({ error: 'Error fetching content' });
      }),
    );
  }
}
