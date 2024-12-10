import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videoData = [
    {
      id: '1',
      title:
        ' Хүрлийн үеийн нүүдэлчдийн хэрэглэж байсан эртний ЦУТГУУРЫН ЧУЛУУН ХЭВ илрүүлжээ',
      url: 'https://www.youtube.com/watch?v=l-dsOwXAFrU',
      picurl: 'images/video/01.jpg',
      small_picurl: 'images/video/w-576/01.jpg',
      lang: 'mn',
      created_at: '2024-12-04 11:34:33',
      created_user: '0',
      updated_at: '2024-12-04 05:12:39',
      updated_user: '0',
    },
    {
      id: '2',
      title: 'ШУА-ийн 2023 оны #онцлох үр дүнгээс',
      url: 'https://www.youtube.com/watch?v=0fY0rVcX_A8',
      picurl: 'images/video/0_(2).jpg',
      small_picurl: 'images/video/w-576/0_(2).jpg',
      lang: 'mn',
      created_at: '2024-12-04 11:34:55',
      created_user: '0',
      updated_at: '2024-12-04 05:13:23',
      updated_user: '0',
    },
    {
      id: '3',
      title:
        'Sogoo’s podcast: Археологич, доктор, Шинжлэх ухааны гавьяат зүтгэлтэн Диймаажавын Эрдэнэбаатар',
      url: 'https://www.youtube.com/watch?v=asgAqJTvNuQ',
      picurl: 'images/video/0_(3).jpg',
      small_picurl: 'images/video/w-576/0_(3).jpg',
      lang: 'mn',
      created_at: '2024-12-04 11:35:15',
      created_user: '0',
      updated_at: '2024-12-05 09:31:59',
      updated_user: '0',
    },
    {
      id: '4',
      title: 'ШУА ийн Археологийн хүрээлэн',
      url: 'https://www.youtube.com/watch?v=mk4iH6FFWyE&t=1s',
      picurl: 'images/video/0_(1)1.jpg',
      small_picurl: 'images/video/w-576/0_(1)1.jpg',
      lang: 'mn',
      created_at: '2024-12-04 11:35:34',
      created_user: '0',
      updated_at: '2024-12-04 05:14:35',
      updated_user: '0',
    },
  ];
  constructor(private http: HttpClient) {}

  getAllVideo(): Observable<any> {
    // You can pass any data if needed in the request body
    const payload = { lang: 'mn' }; // Modify this if you need to send any specific data

    return this.http.post(`${environment.apiUrl}/video`, payload);
    // If there's no data to send, you can pass an empty object or other data.
  }
}
