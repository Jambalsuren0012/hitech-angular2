import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsCardsData = [
    {
      id: '1',
      title: 'ERI-001A',
      postDate: '2024-09-06 12:19:43',
      description:
        'lorem23 text lorem23 textlorem23 textlorem23 textlorem23 textlorem23 textlorem23 textlorem23 textlorem23 textlorem23 text',
      link: 'https://example.com/news/eri-001a',
      bookcategoryid: '1',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      small_picurl: 'images/product/w-576/urdaas_bage.jpg',
      home_picurl: 'images/product/Cover_zurag.jpg',
      home_small_picurl: 'images/product/w-576/Cover_zurag.jpg',
      bgcolor: '#000000',
      status: '1',
      created_at: '2024-09-06 12:19:43',
      created_user: '0',
      updated_at: '2024-09-25 04:06:38',
      updated_user: '0',
    },
  ];

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Fetch news list from the API
  newslist(): Observable<any> {
    return this.http.get(this.apiUrl + 'news');
  }

  // Fetch news details by ID (unchanged)
  getNewsDetails(id: string) {
    return this.newsCardsData.filter((news) => news.id === id);
  }

  // Get all news: either fetch from local data or from API
  getAllNews(): Observable<any> {
    // If using local data:
    return of(this.newsCardsData);

    // OR if fetching from API:
    // return this.http.get(this.apiUrl + 'news');
  }
}
