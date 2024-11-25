import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from '../../service/news.service';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { formatDistanceToNow } from 'date-fns';
import { mn } from 'date-fns/locale';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-newscard-slider',
  templateUrl: './newscard-slider.component.html',
  styleUrls: ['./newscard-slider.component.css'],
})
export class NewscardSliderComponent implements OnInit {
  isHovered = false;
  newsid: string | null = null;
  newsDetails: any = null;
  newsCards: any[] = []; // Array to hold news items
  imgUrl = environment.imgUrl;
  faClock = faClock; // Reference the icon
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
        // Sort the data by created_at in descending order and take the first 6 items
        this.newsCards = data
          .sort(
            (
              a: { created_at: string | number | Date },
              b: { created_at: string | number | Date },
            ) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime(),
          )
          .slice(0, 6); // Take the first 6 items
      },
      (error) => {
        console.error('Error fetching news:', error);
      },
    );
  }

  trackById(index: number, news: any): string {
    return news.id;
  }

  getTimeAgo(dateString: string): string {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: mn,
    });
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
      600: { items: 2 },
      900: { items: 2 },
      1200: { items: 4 },
      1400: { items: 5 },
    },
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
  };
}
