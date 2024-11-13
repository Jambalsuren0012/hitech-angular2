import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-news-details-page',
  templateUrl: './news-details-page.component.html',
  styleUrls: ['./news-details-page.component.css'],
})
export class NewsDetailsPageComponent implements OnInit {
  newsdetailslist: any = null;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const newsid = params.get('id'); // Using 'id' as the parameter key
      if (newsid) {
        // Fetch all news items and filter for the specific newsid
        this.newsService.getAllNews().subscribe((allNews) => {
          this.newsdetailslist =
            allNews.find((news: any) => news.id === newsid) || null;
        });
      }
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
      1200: { items: 1 },
    },
  };
}
