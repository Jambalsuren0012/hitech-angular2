import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  // constructor() {}
  // getAllAboutus(payload: any): Observable<any> {
  //   // If using local data:
  //   //   const payload = { lang: lang };
  //   return this.http.post<any>(`${environment.apiUrl}/content`, payload).pipe(
  //     map((response) => {
  //       // Filter the response to only include books
  //       return response.filter(
  //         (item: { type: string }) => item.type === 'aboutus',
  //       );
  //     }),
  //   );
  // }
}
