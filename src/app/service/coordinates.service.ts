import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoordinatesService {
  coordinates = [
    {
      coords: [44.42533, 101.10134],
      id: '1',
      title: 'Баянхонгор, Баянлиг, ',
      description: ' ',

      picurl:
        'https://lh4.googleusercontent.com/proxy/ztKiYB5RKKAb-n88n8Aty7dyJxnI6KQCZgumUonmSC39o_HYgKqpE8sVsmKW0wlboEO1lM10z1W1bu1-1jzYyvQKe7r0WyHgy4JHXW0',
      text: '',
      created_at: '2024-11-24 12:19:43',
      readcount: '32',
    },
    {
      coords: [47.9795, 91.6348],
      id: '2',
      title: 'Завхан Эрдэнэхайрхан, Дөрвөлжин',
      description: '',
      picurl:
        'https://filmmongolia.gov.mn/wp-content/uploads/2024/04/Ih-Uul-940x520.jpg',
      text: '',
      created_at: '2024-11-24 12:19:43',
      readcount: '32',
    },
    {
      coords: [48.3163, 101.2529],
      id: '3',
      title: 'Архангай Эрдэнэмандал ',
      description: 'Өлзийт дэнж',
      picurl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjemp-0o1U9yKnSfy5nPDGUbsQ4IWqrwwxfbHy4pOTn5Ctv1P__7TqOSi9vi3oD9LohGfheBAMyD9v2nxImyOGoU-Xb52gFIFONPw5i3v_6TM7FlNxb2vxNBAwbbrmgmp3RpS7xGr0GEH3L/s1600/f.jpg',
      text: '',
      created_at: '2024-11-24 12:19:43',
      readcount: '32',
    },
    {
      coords: [43.5, 104.2861],
      id: '4',
      title: 'Umnugovi',
      description: 'Province in southern Mongolia',
      picurl: '',
      text: '',
      created_at: '2024-11-24 12:19:43',
      readcount: '32',
    },
    {
      coords: [48.2388, 96.0703],
      id: '5',
      title: 'Zavkhan',
      description: 'Province in northwestern Mongolia',
      picurl: '',
      text: '',
      created_at: '2024-11-24 12:19:43',
      readcount: '32',
    },
  ];
  constructor(private http: HttpClient) {}
  coordinate = this.coordinates;
  coordinatlist(): Observable<any> {
    return new Observable((observer) => {
      observer.next(this.coordinates); // Emit the static menuItem list
      observer.complete(); // Complete the observable
    });
  }
}
