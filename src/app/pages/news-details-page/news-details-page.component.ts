import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-news-details-page',
  templateUrl: './news-details-page.component.html',
  styleUrls: ['./news-details-page.component.css'],
})
export class NewsDetailsPageComponent implements OnInit {
  newsDetails: any = null;
  imgUrl = environment.imgUrl;
  slider: any = null;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const newsid = params.get('id'); // Get the `id` from the route
      if (newsid) {
        this.fetchNewsDetails(newsid);
      }
    });
  }

  fetchNewsDetails(newsid: string): void {
    this.newsService.getAllNews().subscribe(
      (data) => {
        this.newsDetails = data.find((item: any) => item.id === newsid) || null;
      },
      (error) => {
        console.error('Error fetching news details:', error);
      },
    );
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,

    responsive: {
      0: { items: 1 }, // 1 item for mobile devices
      600: { items: 1 }, // 2 items for screens wider than 600px
      1000: { items: 1 }, // 3 items for screens wider than 1000px
      1200: { items: 1 }, // 4 items for screens wider than 1200px
    },
  };
}
