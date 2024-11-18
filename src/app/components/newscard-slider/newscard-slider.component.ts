import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from '../../service/news.service';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-newscard-slider',
  templateUrl: './newscard-slider.component.html',
  styleUrls: ['./newscard-slider.component.css'],
})
export class NewscardSliderComponent implements OnInit {
  newsid: string | null = null;
  newsDetails: any = null;
  newsCards: any[] = []; // Array to hold news items
  imgUrl = environment.imgUrl;

  constructor(
    private newsDetailsService: NewsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsDetailsService.getAllNews().subscribe(
      (data) => {
        this.newsCards = data;
      },
      (error) => {
        console.error('Error fetching news:', error);
      },
    );
  }

  trackById(index: number, news: any): string {
    return news.id;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      600: { items: 1 },
      900: { items: 2 },
      1200: { items: 3 },
      1400: { items: 4 },
    },
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
  };
}
